'use server'

import { supabase } from './utils/supabase/supabase'


export async function fetchSongs() {

    const { data, error } = await supabase.from('song').select('*')
    if (error) console.error('Error fetching items:', error)
    else return data

};