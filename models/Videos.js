const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const ChannelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, channelId: {
        type: String,
        required: true
    }, channelUrl: {
        type: String,
        required: true
    }, snippet: {
        country: String,
        description: String,
        publishedAt: String,
        thumbnails: {
            default: {
                height: String,
                url: String,
                width: String,
            },
            high: {
                height: String,
                url: String,
                width: String,
            },
            medium: {
                height: String,
                url: String,
                width: String,
            },
        },
        title: String
    },
    statistics: {
        subscriberCount: String,
        videoCount: String,
        viewCount: String
    }
}, { collection: 'videos' });

module.exports = mongoose.model('videos', ChannelSchema)