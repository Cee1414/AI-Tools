# VidMatch Project Setup

## Project Directory Navigation
Navigate to the project directory:
```bash
cd VidMatch
```

## Virtual Environment Setup (Optional but Recommended)
Create a virtual environment:
```bash
python3 -m venv venv
```

Activate the virtual environment:
- For Windows:
  ```bash
  venv\Scripts\activate
  ```
- For Unix or MacOS:
  ```bash
  source venv/bin/activate
  ```

## Install Dependencies
Install dependencies from requirements.txt:
```bash
pip install -r requirements.txt
```

## Configuration
To configure the application, set the following environment variable:
create an `/instance/config.py` file in the root of the project folder and enter this text:
```python
SECRET_KEY = 'placeholder-key-update-text'
```

##run

```python
python3 src/app.py
```


