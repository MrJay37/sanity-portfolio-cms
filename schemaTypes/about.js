import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'about',
    title: 'About',
    fields: [
        // Title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        // Banner pic
        defineField({
            name: 'bannerPic',
            title: 'Banner Picture',
            type: "image"
        }),
        // Intro text
        defineField({
            name: 'intro',
            title: "Introduction",
            type: 'text'
        }),
        // Profile picture
        defineField({
            name: 'myPic',
            title: 'Picture of me',
            type: 'image'
        }),
        // Skills
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                defineField({
                    type: 'document',
                    name: 'skill',
                    title: "Skill",
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'technique',
                            title: 'Technique'
                        }),
                        defineField({
                            type: 'number',
                            name: 'value',
                            title: 'Percentage'
                        }),
                    ]
                })
            ]
        }),
        defineField({
            title: 'Favorite Meme',
            name: 'favMeme',
            type: 'image'
        }),
        defineField({
            title: 'Resume',
            name: 'resume',
            type: 'file'
        })
    ]
})