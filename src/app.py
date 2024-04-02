from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
import random
import os
import time

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
users = []


@app.route('/')
def index():
    global videos

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

    player_id = round(time.time())

    return render_template('index.html', player_id=player_id)

@app.route('/screen1/<player_id>/<user_num>/<choice_num>')
def screen1(player_id, user_num, choice_num):
    global videos
    global users

    v1 = random.randint(0,len(videos)-1)
    v2 = (v1+4) % len(videos)
    v3 = (v2+4) % len(videos)
    v4 = (v3+4) % len(videos)

    return render_template('screen1.html',
                           player_id=player_id,
                           user_num=user_num,
                           choice_num=choice_num,
                           user_image=users[int(user_num)].imageurl,
                           videos=videos, 
                           v1=v1,
                           v2=v2,
                           v3=v3,
                           v4=v4
                           )

@app.route('/screen2/<player_id>/<user_num>/<choice_num>/<clicked>')
def screen2(player_id, user_num, choice_num, clicked):
    global videos

    if clicked != '-1':
        #add the score to the category:
        for key in users[int(user_num)].scores:
            if key == videos[int(clicked)].category:
                users[int(user_num)].scores[key] += 10

    if int(choice_num) == 9:
        if int(user_num) == 4:
            #call final_results at the end
            return final_results()
        else:
            #call results
            return user_results(player_id=player_id,user_num=user_num,)
    else:
        return screen1(player_id, user_num, str(int(choice_num)+1))




@app.route('/user-results/<player_id>/<user_num>')
def user_results(player_id, user_num):
    global users

    return render_template('user-results.html',
                           user=users[int(user_num)],
                           player_id=player_id,
                           new_number=str(int(user_num)+1)
                           )

@app.route('/final-results')
def final_results():
    return render_template('final-results.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)




