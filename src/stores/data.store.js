import create from 'zustand';
import { persist } from 'zustand/middleware';
import userData from './data.json'
import produce from 'immer';
import { arrayMoveImmutable } from 'array-move';

export const useIntro = create(
  persist(
    (set) => ({
      intro: userData.basics,

      reset: (data = userData.basics) => {
        set({ intro: data });
      },

      update: (type, value) =>
        set(
          produce((state) => {
            if (type.includes('.')) {
              const [parent, child] = type.split('.');
              state.intro[parent][child] = value;
            } else state.intro[type] = value;
          })
        ),

      updateProfiles: (type, field, value) =>
        set(
          produce((state) => {
            const object = state.intro.profiles.find((profile) => profile.network === type);

            if (object) {
              object[field] = value;
              return;
            }
            state.intro.profiles.push({ network: type, [field]: value });
          })
        ),
    }),
    {
      name: 'sprb-intro',
    }
  )
);

export const useSkillsValue = create(
  persist(
    (set) => ({
      languages: userData.skills.languages,
      tools: userData.skills.tools,
      
      reset: (data = userData.skills) => {
        set({
            languages: data.languages,
            tools: data.tools,
          });
        },
        
        add: (type, name = '', level = 5) =>
         set((state) => {
            if (state[type].some((skill) => skill.name === '')) return;
            state[type] = [...state[type]];
            state[type].push({ name, level });
          }),
  
        update: (type, index, key, value) =>
        set((state) => {
          state[type] = [...state[type]];
          state[type][index][key] = value;
        }),
  
        purge: (type, index) =>
        set((state) => {
            state[type] = state[type].filter((_, ind) => index !== ind);
          }),
          
          changeOrder: (type, oldIndex, newIndex) =>
          set((state) => ({
            ...state,
            [type]: arrayMoveImmutable(state[type], oldIndex, newIndex),
          })),
        }),
      {
        name: 'sprb-skills',
      }
      )
);

export const useSkillsNoValue = create(
  persist(
    (set) => ({
      languages: userData.skillsNoValue.languages,
      tools: userData.skillsNoValue.tools,
      
      reset: (data = userData.skillsNoValue) => {
        set({
            languages: data.languages,
            tools: data.tools,
          });
        },
      
        update: (type, value) =>
        set(
          produce((state) => {
            state[type] = value;
          })
        ),
   
        }),
      {
        name: 'sprb-skills-novalue',
      }
      )
);

export const useWork = create(
  persist(
    (set) => ({
      companies: userData.work,

      reset: (data = userData.work) => {
        set({ companies: data });
      },

      add: () =>
        set((state) => ({
          companies: [
            ...state.companies,
            {
              CompanyName: '',
              position: '',
              url: '',
              startDate: '',
              endDate: '',
              years: '',
              summary: '',
            },
          ],
        })),

      update: (index, field, value) =>
        set((state) => {
          const newCompnaies = [...state.companies];
          newCompnaies[index][field] = value;
          return {
            companies: newCompnaies,
          };
        }),

      purge: (index) =>
        set((state) => ({
          companies: state.companies.filter((_, ind) => ind !== index),
        })),

      changeOrder: ( oldIndex, newIndex ) =>
        set((state) => ({
          companies: arrayMoveImmutable(state.companies, oldIndex, newIndex),
        })),
    }),
    {
      name: 'sprb-work',
    }
  )
);

export const useSocials = create(
  persist(
    (set) => ({
      socials: userData.basics.profiles,

      reset: (data =  userData.basics.profiles) => {
        set({ companies: data });
      },

      add: () =>
        set((state) => ({
          socials: [
            ...state.socials,
            {
              "network": "",
              "userName": "",
              "url": ""
            },
          ],
        })),

      update: (index, field, value) =>
        set((state) => {
          const newSocials = [...state.socials];
          newSocials[index][field] = value;
          return {
            socials: newSocials,
          };
        }),

      purge: (index) =>
        set((state) => ({
          socials: state.socials.filter((_, ind) => ind !== index),
        })),

      changeOrder: ( oldIndex, newIndex ) =>
        set((state) => ({
          socials: arrayMoveImmutable(state.socials, oldIndex, newIndex),
        })),
    }),
    {
      name: 'sprb-socials',
    }
  )
);

export const useReferences = create(
  persist(
    (set) => ({
      references: userData.references,

      reset: (data = userData.references) => {
        set({ references: data });
      },

      add: () =>
        set((state) => ({
          references: [
            ...state.references,
            {
              "fullNames": "",
              "company": "",
              "position": "",
              "phoneNumber": "",
              "email": ""
            } 
          ],
        })),

      update: (index, field, value) =>
        set((state) => {
          const newReferences = [...state.references];
          newReferences[index][field] = value;
          return {
            references: newReferences,
          };
        }),

      purge: (index) =>
        set((state) => ({
          references: state.references.filter((_, ind) => ind !== index),
        })),

      changeOrder: ( oldIndex, newIndex ) =>
        set((state) => ({
          references: arrayMoveImmutable(state.references, oldIndex, newIndex),
        })),
    }),
    {
      name: 'sprb-references',
    }
  )
);

export const useEducation = create(
  persist(
    (set) => ({
      education: userData.education,

      reset: (data =  userData.education) => {
        set({ education: data });
      },

      add: () =>
        set((state) => ({
          education: [
            ...state.education,
            {
              "institution": "",
              "url": "",
              "studyType": "",
              "studyArea": "",
              "startDate": "",
              "endDate": "",
              "score": "",
              "courseSummary": ""
            },
          ],
        })),

      update: (index, field, value) =>
        set((state) => {
          const newEducation = [...state.education];
          newEducation[index][field] = value;
          return {
            education: newEducation,
          };
        }),

      purge: (index) =>
        set((state) => ({
          education: state.education.filter((_, ind) => ind !== index),
        })),

      changeOrder: ( oldIndex, newIndex ) =>
        set((state) => ({
          education: arrayMoveImmutable(state.education, oldIndex, newIndex),
        })),
    }),
    {
      name: 'sprb-education',
    }
  )
);
      

      


