from flask import render_template,request,redirect,url_for,abort
from flask_login import login_required, current_user
from . import main
from .. import db, photos
# from ..request import get_quote
# from ..models import User, Post, Comment, Subscriber
# from .forms import PostForm, CommentForm, UpdateProfile, SubscribeForm
# from .. email import mail_message
@main.route('/')
def index():
 title = 'Home'
#   posts = Post.get_posts()
#   quote = get_quote()
 return render_template('index.html', title = title)

@main.route('/search')
def search():
 title = 'Home'
#   posts = Post.get_posts()
#   quote = get_quote()
 return render_template('search.html', title = title)


@main.route('/first')
def first():
 title = 'Home'
#   posts = Post.get_posts()
#   quote = get_quote()
 return render_template('first.html', title = title)