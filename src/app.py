from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms import ValidationError
from wtforms.validators import DataRequired
from flask_migrate import Migrate




app = Flask(__name__, static_url_path='/static', static_folder='static')
app.config.from_pyfile('../instance/config.py')
app.config["WTF_CSRF_ENABLED"] = False

secret_key = app.config['SECRET_KEY']

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///names.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Define database model

class Name(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    # Define a many-to-many relationship with User
    users = db.relationship('User', secondary='user_name_association', backref='names')

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    # Define a one-to-many relationship with Choices
    choices = db.relationship('Choices', backref='user', lazy=True)

class Choices(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    video_choice = db.Column(db.String(100), nullable=False)
    attribute = db.Column(db.String(100), nullable=False)
    screenNumber = db.Column(db.Integer, nullable=False)

# Association Table for Name-User Many-to-Many Relationship
user_name_association = db.Table('user_name_association',
    db.Column('name_id', db.Integer, db.ForeignKey('name.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'))
)

#insert users
def insert_users(user_name):
    if not User.query.filter_by(user_name=user_name).first():
         new_user = User(user_name=user_name)
         db.session.add(new_user)
         db.session.commit()
         print(f"User {user_name} inserted into the database.")
    else:
        print(f'{user_name} already in database')
        

# Create the database tables

with app.app_context():
     db.create_all()

##handle forms 

def validateName(form, field):
    name = field.data.split()
    if len(name) < 2:
        raise ValidationError('Please enter your full name (first name and last initial).')

class lowerCaseStringField(StringField):
    def process_formdata(self, valuelist):
        if valuelist:
            self.data = valuelist[0].lower()

class nameForm(FlaskForm):
    name = lowerCaseStringField('Input First Name And Last Initial:', validators=[DataRequired(), validateName])
    submit = SubmitField('Play')

# Clear session on visiting index page 
@app.before_request
def clear_session():
    if request.method == 'GET' and request.endpoint == 'index':
        session.clear()
        print("session-cleared")

##handle routes

@app.route('/', methods=['GET','POST'])
def index():
    #insert users

    insert_users('bob')
    insert_users('susan')
    insert_users('Matthew')
    insert_users('Pamela')
    insert_users('Jasper')

    #process form data
    form = nameForm()
    if form.validate_on_submit():
        name = form.name.data

        new_name = Name(full_name=name)
        db.session.add(new_name)
        db.session.commit()
        ##debug
        for name in Name.query.all():
            print (name.full_name)

        return redirect(url_for('screen1'))
    else:
        print(form.errors)
    return render_template('index.html', form=form)

@app.route('/screen1')
def screen1():
    
    return render_template('screen1.html')

@app.route('/user-results')
def user_results():
    return render_template('user-results.html')

@app.route('/final-results')
def final_results():
    return render_template('final-results.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    
    
    
    
       
    