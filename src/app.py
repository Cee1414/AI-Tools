from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms import ValidationError
from wtforms.validators import DataRequired


app = Flask(__name__, static_url_path='/static', static_folder='static')
app.config.from_pyfile('../instance/config.py')

secret_key = app.config['SECRET_KEY']

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///names.db'
db = SQLAlchemy(app)

# Define database model
class Name(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

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
    submit = SubmitField('Submit')

##handle routes

@app.route('/', methods=['GET','POST'])
def index():
    #process form data
    form = nameForm()
    if form.validate_on_submit():
        name = form.name.data
        return f'Hello, {name}!'
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