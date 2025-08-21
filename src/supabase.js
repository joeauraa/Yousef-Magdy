import { createClient } from "@supabase/supabase-js";

// هنا بتحط بيانات مشروعك من supabase
const supabaseUrl = "https://ntrbkldbucwoaxoxjwyx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cmJrbGRidWN3b2F4b3hqd3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3Mzc4MDcsImV4cCI6MjA3MTMxMzgwN30.RCeiYelzZVcMGq1bc_JxFmdMe5eMJYUsfdjLWnD6_Cw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
