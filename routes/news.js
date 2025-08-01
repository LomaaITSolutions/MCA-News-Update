


const express = require('express');
const axios = require('axios');
const newsr = express.Router();

newsr.get('/', async (req, res) => {
    try {
        // var url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=3f38cc00cc7c479ead678f65f2082810';
        var url='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3f38cc00cc7c479ead678f65f2082810';

        const news_get = await axios.get(url);
        res.render('news', { articles: news_get.data.articles });

    } catch (error) {
        if (error.response) {
            console.log(error);
        }
    }
});

newsr.post('/search', async (req, res) => {
    const search = req.body.search;

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=3f38cc00cc7c479ead678f65f2082810`;

        const news_get = await axios.get(url);
        res.render('news', { articles: news_get.data.articles });

    } catch (error) {
        if (error.response) {
            console.log(error);
        }
    }
});

newsr.get('/news/:category', async (req, res) => {
    // var category = req.params.category;
    var searchs = req.params.category;
    try {
        
        var url =`http://newsapi.org/v2/everything?q=${searchs}&apiKey=3f38cc00cc7c479ead678f65f2082810`

        const news_get = await axios.get(url);
        res.render('category', { articles: news_get.data.articles });

    } catch (error) {
        if (error.response) {
            console.log(error);
        }
    }
});

module.exports = newsr;
