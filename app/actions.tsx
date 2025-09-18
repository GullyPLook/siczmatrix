'use server'

import { supabase } from './utils/supabase/supabase'


export async function versions() {

    const { data, error } = await supabase
    .from('all_versions')
    .select('*')
    if (error) console.error('Error fetching items:', error)
    else return data

};

export async function composers(d: number) {

    const { data, error } = await supabase
    .from('composers')
    .select('*')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function adaptations(d: number) {

    const { data, error } = await supabase
    .from('adaptations')
    .select('*')
    .eq('medley_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};


export async function personalTags(d: number) {

    const { data, error } = await supabase
    .from('tags')
    .select('*')
    .or('type_id.in.(5,11,12), tag_id.in.(6,8,13,14,20,1476)')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function releaseTags(d: number) {

    const { data, error } = await supabase
    .from('tags')
    .select('*')
    .or('type_id.in.(2,26,32,54,62,63), tag_id.in.(3,4,1208)')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
}; 

export async function styleTags(d: number) {

    const { data, error } = await supabase
    .from('tags')
    .select('*')
    .or('type_id.in.(3,7,8,9,10)')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
}; 

export async function specialTags(d: number) {

    const { data, error } = await supabase
    .from('tags')
    .select('*')
    .or('type_id.in.(4,6,67), tag_id.in.(5,9,11,17,1555,1201)')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function threeColTags(d: number) {

    const { data, error } = await supabase
    .from('tag_versions')
    .select('*')
    .eq('tag_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function fourColTags(d: number) {

    const { data, error } = await supabase
    .from('tag_versions')
    .select('*')
    .eq('type_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function perfThreeColTags(d: number) {

    const { data, error } = await supabase
    .from('perftag_versions')
    .select('*')
    .eq('tag_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function perfFourColTags(d: number) {

    const { data, error } = await supabase
    .from('perftag_versions')
    .select('*')
    .eq('type_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function releaseFourColTags(d: number) {

    const { data, error } = await supabase
    .from('releasetag_versions')
    .select('*')
    .eq('release_tag_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function releaseFourColTagsYear(d: number) {

    const { data, error } = await supabase
    .from('releasetag_year_versions')
    .select('*')
    .eq('release_tag_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function performances(d: number) {

    const { data, error } = await supabase
    .from('performance')
      .select(`
      *,
      tag (
        *
      )
    `)
    .eq('version_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function performanceTags(d: number) {

    const { data, error } = await supabase
    .from('performance_tags')
    .select('*')
    .eq('version_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function composerCredits(d: number) {

    const { data, error } = await supabase
    .from('composer_credits')
    .select('*')
    .eq('composer_id', d)
    if (error) console.error('Error fetching items:', error)
    else return data
};

export async function artistCreditsA(d: number) {

    const { data, error } = await supabase
    .from('all_versions')
    .select('*')
    .eq('artist_a_id', d)
    if (error) console.error('Error fetching items:', error)        
    else return data
};

export async function artistCreditsB(d: number) {

    const { data, error } = await supabase
    .from('all_versions')
    .select('*')
    .eq('artist_b_id', d)
    if (error) console.error('Error fetching items:', error)        
    else return data
};

export async function songCredits(d: number) {

    const { data, error } = await supabase
    .from('all_versions')
    .select('*')
    .eq('song_id', d)
    if (error) console.error('Error fetching items:', error)        
    else return data
};

export async function getArtist(d: number) {

     const { data, error } = await supabase
    .from('artist')
    .select('*')
    .eq('id', d)
    if (error) console.error('Error fetching items:', error)        
    else return data
};

export async function yearCredits(d: any) {

    const { data, error } = await supabase
    .from('all_versions')
    .select('*')
    .eq('year', d)
    if (error) console.error('Error fetching items:', error)        
    else return data
};


