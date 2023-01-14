import create from 'zustand';
import Sample from '../templates/layouts/Sample';
import { persist } from 'zustand/middleware';
export const templates = [
    Sample
]

export const templatesImg = []

export const templateName = ['sample']

export const useTemplates = create((set) => ({
    index: 0,
    template: templates[0],
  
    setTemplate: (index) => set({ index, template: templates[index] }),
  }));


 export const useActiveEditor = create(
    persist(
      (set) => ({
        activeTab: 0,
        setActiveTab: (val) => set({ activeTab: val }),
      }),
      {
        name: 'editor-Tab',
      }
    )
  )

 export const useUrl = create(
    persist(
      (set) => ({
        url: "",
        setUrl: (val) => set({ url: val }),
      }),
      {
        name: 'url-Tab',
      }
    )
  )