import os
import logging
from flask import Flask, render_template, request, redirect, url_for, flash

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "echo-noir-default-secret")

# Route for home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for features page
@app.route('/features')
def features():
    return render_template('features.html')

# Route for pricing page
@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

# Route for about page
@app.route('/about')
def about():
    return render_template('about.html')

# Route for contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Route for contact form submission
@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # In a production environment, you would process the form data
    # e.g., send an email or store in a database
    
    # For now, just flash a success message
    flash('Thank you for your message! We will get back to you soon.')
    return redirect(url_for('contact'))

# Custom 404 error handler
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
