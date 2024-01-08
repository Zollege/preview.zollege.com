import { defineConfig } from "tinacms";
import { settingsFields } from './templates'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "8b480c87-51f6-4c4b-95b9-7301920cdb38", // Get this from tina.io
  token: "811ef5fb5406ee985ea9332f7df58f163d11f948", // Get this from tina.io

  cmsCallback: cms => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: 'settings',
        label: 'Settings',
        path: '',
        format: 'md',
        templates: [
          {
            name: 'settings',
            label: 'Settings',
            fields: settingsFields(),
          },
        ],
      },
      {
        name: 'locations',
        label: 'Locations',
        path: 'locations',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              return `${values?.key?.toLowerCase()}`
            }
          }
        },
        fields:[
          {
            type: "string",
            name: "layout",
            defaultItem: () => {
              return {
                layout: 'default'
              }
            },
          },
          {
            type: "string",
            name: "key",
            label: "School Key",
            required: true,
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ]
      }
    ],
  },
});
