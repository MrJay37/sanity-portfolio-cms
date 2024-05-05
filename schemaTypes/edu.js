import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'education',
    title: 'Education',
    fields: [
        defineField({
            type: 'string',
            name: 'school',
            title: "School"
        }),
        defineField({
            type: "date",
            name: 'startDate',
            title: "Start Date"
        }),
        defineField({
            type: "date",
            name: 'endDate',
            title: "End Date"
        }),
        defineField({
            type: 'image',
            name: 'img',
            title: "School Picture"
        }),
        defineField({
            type: "url",
            name: 'url',
            title: "School URL"
        }),
        defineField({
            type: 'string',
            name: 'degree',
            title: 'Degree'
        }),
        defineField({
            type: 'string',
            name: 'program',
            title: 'Program'
        }),
        defineField({
            type: 'document',
            name: 'location',
            title: "Location",
            fields: [
                defineField({
                    type: 'string',
                    name: 'city',
                    title: 'City'
                }),
                defineField({
                    type: 'string',
                    name: 'state',
                    title: 'State'
                }),
                defineField({
                    type: 'string',
                    name: 'country',
                    title: 'Country'
                })
            ]
        })
    ]
})
