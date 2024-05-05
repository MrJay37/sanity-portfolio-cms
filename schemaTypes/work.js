import {defineField, defineType} from 'sanity'

export default defineType({
    type: 'document',
    name: 'work',
    title: 'Work',
    fields: [
        defineField({
            name: 'organization',
            title: 'Organization',
            type: 'string'
        }),
        {
            name: 'logo',
            title: "Logo",
            type: "image"
        },
        {
            name: 'url',
            title: "URL",
            type: "url"
        },
        defineField({
            type: "array",
            name: 'positions',
            title: 'Positions',
            of: [
                defineField({
                    name: 'position',
                    title: 'Position',
                    type: 'document',
                    fields: [
                        {
                            type: 'string',
                            name: 'posName',
                            title: 'Position Name'
                        },
                        {
                            type: 'date',
                            name: 'start',
                            title: "Start Date"
                        },
                        {
                            type: 'date',
                            name: 'end',
                            title: "End Date"
                        },
                        {
                            type: 'document',
                            name: 'location',
                            title: "Location",
                            fields: [
                                {
                                    name: 'city',
                                    type: 'string',
                                    title: "City"
                                },
                                {
                                    name: 'state',
                                    type: 'string',
                                    title: "State"
                                },
                                {
                                    name: 'country',
                                    type: 'string',
                                    title: "Country"
                                }
                            ]
                        },
                        {
                            type: 'array',
                            name: 'duties',
                            title: "Duties",
                            of: [
                                {
                                    type: 'string',
                                    name: 'duty'
                                }
                            ]
                        }
                    ]
                })
            ]
        })
    ]
})