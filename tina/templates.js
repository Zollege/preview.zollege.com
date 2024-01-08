export function settingsFields() {
    return [
      {
        type: "string",
        name: "title",
        label: "Title",
      },
      {
        type: "boolean",
        name: "settings",
        label: "Settings",
      },
      {
        type: "string",
        name: "head_title",
        label: "Head Title",
      },
      {
        type: "string",
        name: "global_announcement",
        label: "Global Announcement",
      },
      {
        type: "string",
        name: "secondary_global_announcement",
        label: "Secondary Global Announcement",
      },
      {
        type: "string",
        name: "hubspot_portal_id",
        label: "Hubspot Portal ID",
      },
      {
        type: "string",
        name: "scheduling_url",
        label: "Scheduling URL",
      },
      {
        type: "string",
        name: "contact_form_guid",
        label: "contact_form_guid",
      },
      {
        type: "string",
        name: "application_form_guid",
        label: "application_form_guid",
      },
      {
        type: "string",
        name: "google_tag_manager",
        label: "Google Tag Manager",
      },
      {
        type: "string",
        name: "facebook_pixel",
        label: "Facebook Pixel",
      },
      {
        type: "object",
        name: "praise",
        label: "Praise",
        fields: [
          {
            type: "image",
            name: "Dental",
            label: "Dental",
            list: true,
          },
          {
            type: "image",
            name: "Medical",
            label: "Medical",
            list: true,
          },
          {
            type: "image",
            name: "Snap",
            label: "Snap",
            list: true,
          },
        ],
      },
      {
        type: "object",
        name: "schools",
        ui: {
          itemProps: (item) => {
            return { label: item?.name }
          }
        },
        list: true,
        fields: [
          {
            type: "string",
            name: "key",
            label: "Key",
          },
          {
            type: "boolean",
            name: "active",
            label: "Currently Active",
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
          },
          {
            type: "string",
            name: "type",
            label: "Program Type",
            options: ["Dental", "Medical"],
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "image",
            name: "seal",
            label: "Seal",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "number",
            name: "phone",
            label: "Phone",
          },
          {
            type: "string",
            name: "regal_number",
            label: "Regal Number",
          },
          {
            type: "string",
            name: "timezone",
            label: "Timezone",
          },
          {
            type: "image",
            name: "ebook",
            label: "eBook",
          },
          {
            type: "object",
            name: "location_copy",
            label: "Location Copy",
            list: true,
            fields: [
                {
                  type: "string",
                  name: "meta_description",
                  label: "Page Description",
                },
                {
                  type: "string",
                  name: "keywords",
                  label: "Keywords",
                },
                {
                  type: "string",
                  name: "hero_headline",
                  label: "Hero Headline",
                },
                {
                  type: "string",
                  name: "hero_body_copy",
                  label: "Hero Body Copy",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "bullet_one",
                  label: "1st Hero Bullet Point",
                },
                {
                  type: "string",
                  name: "bullet_two",
                  label: "2nd Hero Bullet Point",
                },
                {
                  type: "string",
                  name: "bullet_three",
                  label: "3rd Hero Bullet Point",
                },
                {
                  type: "string",
                  name: "program_section_header",
                  label: "Program Section Header",
                },
                {
                  type: "string",
                  name: "program_one_header",
                  label: "1st Program Section Header",
                },
                {
                  type: "string",
                  name: "program_one_body",
                  label: "1st Program Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "program_two_header",
                  label: "2nd Program Section Header",
                },
                {
                  type: "string",
                  name: "program_two_body",
                  label: "2nd Program Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "program_three_header",
                  label: "3rd Program Section Header",
                },
                {
                  type: "string",
                  name: "program_three_body",
                  label: "3rd Program Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "program_four_header",
                  label: "4th Program Section Header",
                },
                {
                  type: "string",
                  name: "program_four_body",
                  label: "4th Program Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "why_choose_section_header",
                  label: "Why Choose Section Header",
                },
                {
                  type: "string",
                  name: "why_choose_body",
                  label: "Why Choose Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "choose_one",
                  label: "1st Why Choose Bullet Point",
                },
                {
                  type: "string",
                  name: "choose_two",
                  label: "2nd Why Choose Bullet Point",
                },
                {
                  type: "string",
                  name: "choose_three",
                  label: "3rd Why Choose Bullet Point",
                },
                {
                  type: "string",
                  name: "location_specific_header",
                  label: "Location Specific Section Header",
                },
                {
                  type: "string",
                  name: "location_specific_body",
                  label: "Location Specific Section Body",
                  ui: {
                    component: "textarea",
                  },
                },
              ]
          },
          {
            type: "string",
            name: "announcement",
            label: "Announcement",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hubspot_company_id",
            label: "Hubspot Company ID",
          },
          {
            type: "string",
            name: "thank_you_video_id",
            label: "Thank You Video ID",
          },
          {
            type: "boolean",
            name: "no_share_online",
            label: "No Share Online",
          },
          {
            type: "boolean",
            name: "hybrid",
            label: "Hybrid",
          },
          {
            type: "image",
            name: "praise",
            label: "Praise",
            list: true,
          },
          {
            type: "string",
            name: "recaptcha_site_key",
            label: "Recaptcha Site Key",
          },
          {
            type: "string",
            name: "google_analytics",
            label: "Google Analytics",
          },
          {
            type: "string",
            name: "callrail_company_id",
            label: "Callrail Company ID",
          },
          {
            type: "string",
            name: "facebook",
            label: "Facebook",
          },
          {
            type: "string",
            name: "instagram",
            label: "Instagram",
          },
          {
            type: "number",
            name: "tuition",
            label: "Tuition",
          },
          {
            type: "string",
            name: "tuition_hubspot_product_id",
            label: "Tuition Hubspot Product ID",
          },
          {
            type: "number",
            name: "course_length_weeks",
            label: "Course Length Weeks",
          },
          {
            type: "number",
            name: "course_length_weeks_online",
            label: "Course Length Weeks Online",
          },
          {
            type: "string",
            name: "admission_hours",
            label: "Admission Hours",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "footer_text",
            label: "Footer Text",
          },
          {
            type: "object",
            name: "payment_plans",
            ui: {
              itemProps: (item) => {
                return { label: item?.label }
              }
            },
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "number",
                name: "down_payment",
                label: "Down Payment",
              },
              {
                type: "number",
                name: "weekly_payment",
                label: "Weekly Payment",
              },
              {
                type: "number",
                name: "number_of_weeks",
                label: "Number of Weeks",
              },
              {
                type: "string",
                name: "deposit_hubspot_product_id",
                label: "Deposit Hubspot Product ID",
              },
              {
                type: "string",
                name: "payment_plan_hubspot_product_id",
                label: "Payment Plan Hubspot Product ID",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "notes",
                label: "Notes",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "locations",
            ui: {
              itemProps: (item) => {
                return { label: item?.campus }
              }
            },
            list: true,
            fields: [
              {
                type: "string",
                name: "campus",
                label: "Campus",
              },
              {
                type: "string",
                name: "street",
                label: "Street",
              },
              {
                type: "string",
                name: "city",
                label: "City",
              },
              {
                type: "string",
                name: "state",
                label: "State",
              },
              {
                type: "string",
                name: "postal",
                label: "Postal",
              },
              {
                type: "string",
                name: "url",
                label: "Google Maps URL",
              },
              {
                type: "string",
                name: "placeid",
                label: "Place ID",
              },
              {
                type: "string",
                name: "hubspot_company_id",
                label: "Hubspot Company ID",
              },
              {
                type: "string",
                name: "waitlist_ticket_id",
                label: "Waitlist Ticket ID",
              },
              {
                type: "string",
                name: "course_catalog_link",
                label: "Course Catalog Link",
              },
              {
                type: "object",
                name: "start_dates",
                label: "Start Dates",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "class_type",
                    label: "Class Type",
                  },
                  {
                    type: "boolean",
                    name: "tbd",
                    label: "TBD",
                  },
                  {
                    type: "string",
                    name: "date",
                    label: "Date",
                  },
                  {
                    type: "string",
                    name: "times",
                    label: "Times",
                  },
                  {
                    type: "string",
                    name: "days",
                    label: "Days",
                  },
                  {
                    type: "number",
                    name: "hubspot_ticket_id",
                    label: "Hubspot Ticket ID",
                  },
                  {
                    type: "boolean",
                    name: "full",
                    label: "Full",
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "after_graduation",
            label: "After Graduation",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "grievance_policy",
            label: "Grievance Policy",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "additional_permalinks",
            label: "Additional Permalinks",
            list: true,
          },
          {
            type: "string",
            name: "google_ads_conversion_id",
            label: "google_ads_conversion_id",
          },
          {
            type: "string",
            name: "google_ads_conversion_label",
            label: "Google Ads Conversion Label",
          },
          {
            type: "string",
            name: "google_ads_application_submission_id",
            label: "Google Ads Application Submission ID",
          },
          {
            type: "string",
            name: "google_ads_application_submission_label",
            label: "Google Ads Application Submission Label",
          },
          {
            type: "string",
            name: "google_ads_contact_form_submission_id",
            label: "Google Ads Contact Form Submission ID",
          },
          {
            type: "string",
            name: "google_ads_contact_form_submission_label",
            label: "Google Ads Contact Form Submission Label",
          },
          {
            type: "string",
            name: "tik_tok_pixel_id",
            label: "tiktok Pixel ID",
          },
          {
            type: "string",
            name: "revcals_id",
            label: "Revcals ID",
          },
          {
            type: "object",
            name: "partner_offices",
            label: "Partner Offices",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "street",
                label: "Street",
              },
              {
                type: "string",
                name: "city",
                label: "City",
              },
              {
                type: "string",
                name: "state",
                label: "State",
              },
              {
                type: "string",
                name: "zipcode",
                label: "Zip Code",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
              },
            ],
          },
          {
            type: "boolean",
            name: "twelve_week_transition",
            label: "Twelve Week Transition",
          },
          {
            type: "string",
            name: "google_optimize_id",
            label: "Google Optimize ID",
          },
          {
            type: "string",
            name: "google_optimize_analytics_id",
            label: "Google Optimize Analytics ID",
          },
          {
            type: "boolean",
            name: "pending_location",
            label: "Pending Location",
          },
          {
            type: "boolean",
            name: "calculator_active",
            label: "Calculator Active",
          },
          {
            type: "boolean",
            name: "tuition_flipped",
            label: "Tuition Flipped",
          },
          {
            type: "string",
            name: "hero_body",
            label: "Hero Body Copy",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        type: "object",
        name: "dental_event",
        label: "Dental Event",
        list: true,
        fields: [
            {
              type: "string",
              name: "title",
              label: "Title - Dental Assistant School ... (Add what follows below)",
            },
            {
              type: "string",
              name: "month",
              label: "Month"
            },
            {
              type: "string",
              name: "date",
              label: "Date"
            },
            {
              type: "string",
              name: "weekday",
              label: "Weekday"
            },
            {
              type: "string",
              name: "time",
              label: "Time"
            },
            {
              type: "string",
              name: "open_house_event",
              label: "Open House Event Name"
            },
            {
              type: "rich-text",
              name: "event_details",
              label: "Event Details"
            },
            {
              type: "string",
              name: "das_event_headline",
              label: "Dental Event Headline Banner - (Starts with 'Sign Up...')"
            },
            {
              type: "string",
              name: "das_event_recording",
              label: "Dental Event Recording - Download"
            },
            {
              type: "boolean",
              name: "no_event",
              label: "No Current Dental Event"
            },
          ]
      },
      {
        type: "object",
        name: "medical_event",
        label: "Medical Event",
        list: true,
        fields: [ 
          {
            type: "string",
            name: "title",
            label: "Title - Medical Assistant School ... (Add what follows below)",
          },
          {
            type: "string",
            name: "month",
            label: "Month"
          },
          {
            type: "string",
            name: "date",
            label: "Date"
          },
          {
            type: "string",
            name: "weekday",
            label: "Weekday"
          },
          {
            type: "string",
            name: "time",
            label: "Time"
          },
          {
            type: "string",
            name: "open_house_event",
            label: "Open House Event Name"
          },
          {
            type: "rich-text",
            name: "event_details",
            label: "Event Details"
          },
          {
            type: "string",
            name: "mas_event_headline",
            label: "Medical Event Headline Banner - (Starts with 'Sign Up...')"
          },
          {
            type: "string",
            name: "mas_event_recording",
            label: "Medical Event Recording - Download"
          },
          {
            type: "boolean",
            name: "no_event",
            label: "No Current Medical Event"
          },
        ]
      },
      {
        type: "string",
        name: "registration_form_headline",
        label: "Event Page Registration Form Headline (Non Promo)"
      },
      {
        type: "boolean",
        name: "registration_promo_active",
        label: "Registration Promo Active"
      },
      {
        type: "string",
        name: "registration_form_promo_headline",
        label: "Event Page Registration Form Promo Headline (Promo Active)"
      },
      {
        type: "string",
        name: "registration_promo_code",
        label: "Event Early Registration Promo Code",
      },
      {
        type: "string",
        name: "registration_promo_blurb",
        label: "Registration Promo Thank You Page Blurb"
      },
      {
        type: "boolean",
        name: "show_video_download",
        label: "Display Previous Event Video Download (Off means don't show on Event Thank You Page)"
      }
    ];
  };
