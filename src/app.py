from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
import random
import os
import time
import json


app = Flask(__name__, static_url_path='/static', static_folder='static')

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///names.db'
db = SQLAlchemy(app)

# Define your database model
class Name(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

# define video class
class Video:
    def __init__(self, imageurl, title, category):
        self.imageurl = imageurl
        self.title    = title
        self.category = category

# define user class
class User:
    def __init__(self, imageurl, number):
        self.imageurl = imageurl
        self.number   = number 
        self.scores   = {
                        'educational': 0,
                        'fashionbeauty': 0,
                        'gaming': 0,
                        'news': 0,
                        'sports': 0,
                        }

#global variables for videos/users
videos = []
users_dict = {}


@app.route('/')
def index():
    global videos
    global users_dict
    users = []

    #read in images
    for root, dirs, files in os.walk("static/images"):
            for filename in files:
                
                # extract containing folder name
                folder_name = os.path.basename(root)

                if folder_name == 'users':
                    # make a new 'user'

                    # Get the full path of the file
                    file_path = filename #os.path.join(root, filename)
                    # Extract the filename (without extension)
                    file_name = os.path.splitext(filename)[0]
                    
                    # Append the information to the list
                    users.append(User(file_path,file_name))

                else:
                    # make a new 'video'

                    # Get the full path of the file
                    file_path = filename #os.path.join(root, filename)
                    # Extract the filename (without extension)
                    file_name = os.path.splitext(filename)[0]

                    # Append the information to the list
                    videos.append(Video(file_path,file_name,folder_name))

    player_id = str(round(time.time()))
    users_dict[player_id] = users
    
    return render_template('index.html', player_id=player_id)

@app.route('/screen1/<player_id>/<user_num>/<choice_num>')
def screen1(player_id, user_num, choice_num):
    global videos
    global users_dict

    v1 = random.randint(0,len(videos)-1)
    v2 = (v1+4) % len(videos)
    v3 = (v2+4) % len(videos)
    v4 = (v3+4) % len(videos)

    return render_template('screen1.html',
                           player_id=player_id,
                           user_num=user_num,
                           choice_num=choice_num,
                           user_image=users_dict[player_id][int(user_num)].imageurl,
                           videos=videos, 
                           v1=v1,
                           v2=v2,
                           v3=v3,
                           v4=v4
                           )

@app.route('/screen2/<player_id>/<user_num>/<choice_num>/<clicked>')
def screen2(player_id, user_num, choice_num, clicked):
    global videos

    if user_num == '5':
        return final_results(player_id=player_id,user_num='0')
    
    #add the score to the category:
    if clicked != '-1':
        for key in users_dict[player_id][int(user_num)].scores:
            if key == videos[int(clicked)].category:
                users_dict[player_id][int(user_num)].scores[key] += 20

    if int(choice_num) == 5:
        #call results
        return user_results(player_id=player_id,user_num=user_num)
    else:
        return screen1(player_id, user_num, str(int(choice_num)+1))




@app.route('/user-results/<player_id>/<user_num>')
def user_results(player_id, user_num):
    global users_dict

    return render_template('user-results.html',
                           user=users_dict[player_id][int(user_num)],
                           player_id=player_id,
                           new_number=str(int(user_num)+1)
                           )

@app.route('/final-results/<player_id>/<user_num>')
def final_results(player_id, user_num):
    global users_dict
    
    return render_template('final-results.html',
                           player_id=player_id,
                           user=users_dict[player_id][int(user_num)],
                           prev_user=str((int(user_num)+4)%5),
                           next_user=str((int(user_num)+1)%5)
                           )


@app.route('/exit/<player_id>')
def exit(player_id):

    #write to file (temporary measure)
    # TODO
    # maybe use pandas dataframe? or maybe sqlite
            
    return index()




if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)




