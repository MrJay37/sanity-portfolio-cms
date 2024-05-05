import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'members',
    title: 'Members',
    fields: [
        defineField({
            type: 'string',
            name: 'name',
            title: "Name"
        }),
        defineField({
            type: "image",
            name: 'img',
            title: "Picture"
        }),
        defineField({
            type: "array",
            name: 'artForms',
            title: "Art Forms",
            of: [
                {
                    type: "string", 
                    name: "artForm", 
                    title: 'Art Form' 
                }
            ]
        }),
        defineField({
            type: "array",
            name: 'socialMedia',
            title: "Social Media Links",
            of: [
                defineField({
                    type: 'document',
                    name: 'socialMediaLink',
                    name: 'Link',
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'app',
                            title: 'App'
                        }),
                        defineField({
                            type: 'url',
                            name: 'url',
                            title: 'URL'
                        })
                    ]
                })
            ]
        })
    ]
})
