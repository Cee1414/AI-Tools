from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static', static_folder='static')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/screen1')
def screen1():
    return render_template('screen1.html')

@app.route('/user-results')
def user_results():
    return render_template('user-results.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)