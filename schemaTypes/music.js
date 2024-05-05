import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'music',
    title: 'Music',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            type: "array",
            name: 'members',
            title: "Members",
            of: [
                defineField({
                    type: 'reference',
                    name: 'member',
                    title: 'Member',
                    to: [{
                        type: 'members'
                    }]
                })
            ]
        }),
        defineField({
            type: "array",
            name: 'genres',
            title: "Genres",
            of: [
                defineField({
                    type: 'string',
                    name: 'genre',
                    title: 'Genre'
                })
            ]
        }),
        defineField({
            type: "image",
            name: 'img',
            title: "Image",
        }),
        defineField({
            type: "text",
            name: 'description',
            title: "Description",
        }),
        defineField({
            type: "array",
            name: 'projects',
            title: 'Projects',
            of: [
                defineField({
                    name: 'project',
                    title: 'Project',
                    type: 'document',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Title'
                        },
                        defineField({
                            type: "array",
                            name: 'genres',
                            title: "Genres",
                            of: [
                                defineField({
                                    type: 'string',
                                    name: 'genre',
                                    title: 'Genre'
                                })
                            ]
                        }),
                        {
                            type: 'text',
                            name: 'description',
                            title: "Description"
                        },
                        {
                            type: 'text',
                            name: 'embed',
                            title: "Embed"
                        }
                    ]
                })
            ]
        }),
        defineField({
            type: 'date',
            name: 'createdOn',
            title: "Created On"
        })
    ]
})