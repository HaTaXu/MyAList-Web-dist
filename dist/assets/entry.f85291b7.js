import{c8 as s}from"./index.cd92df38.js";const r="Backup",i="Restore",a="Start backup",n="Finish backup",d="[ {{item}} ] Backup was successful",l="[ {{item}} ] Backup failed",c="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f="Leave empty if you don't need encryption",g="Encryption password",y="Wrong encryption password",b={backup:r,restore:i,start_backup:a,finish_backup:n,success_backup_item:d,failed_backup_item:l,no_file:c,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m,encrypt_password_placeholder:f,encrypt_password:g,wrong_encrypt_password:y},w={paths:"Paths"},k={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},v={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",drive_type:"Drive type",drive_types:{backup:"Backup",default:"Default",resource:"Resource"},internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",livp_download_format:"Livp download format",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},S={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},P={client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},C={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},R={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},x={bbsid:"Bbsid",cookie:"Cookie",password:"Password",root_folder_id:"Root folder id",user_name:"User name"},A={address:"Address",cookie:"Cookie",custom_ua:"Custom ua",enable_thumb_and_folder_size:"Enable thumb and folder size",password:"Password",root_folder_path:"Root folder path",username:"Username"},T={directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail which pre-generated under .thumbnails folder"},U={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},D={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},z={password:"Password",root_folder_id:"Root folder id",username:"Username"},O={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},L={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},F={password:"Password",root_folder_id:"Root folder id",username:"Username"},M={account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},B={mkdir_perm:"Mkdir perm",recycle_bin_path:"Recycle bin path","recycle_bin_path-tips":"path to recycle bin, delete permanently if empty or keep 'delete permanently'",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},I={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},q={email:"Email",password:"Password"},N={cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",sms_code:"Sms code","sms_code-tips":"input 'send' send sms ",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},j={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},E={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},V={disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},W={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},G={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},Q={cdn:"Cdn","cdn-tips":"If you enable this option, the download speed can be increased, but there will be some performance loss",cookie:"Cookie","cookie-tips":"Cookie can be used on multiple clients at the same time",password:"Password",phone:"Phone",root_folder_id:"Root folder id"},Y={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},H={address:"Address",ignore_symlink_error:"Ignore symlink error",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},K={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},$={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},X={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},Z={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},J={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},ee={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},oe={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},te={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},se={anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},re={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},ie={cookie:"Cookie",order_by:"Order by",order_bys:{CreatTime:"CreatTime",Name:"Name",Size:"Size",UpdateTime:"UpdateTime"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},root_folder_id:"Root folder id",tf_uid:"Tf uid"},ae={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},ne={address:"Address",password:"Password",root_folder_path:"Root folder path",tls_insecure_skip_verify:"Tls insecure skip verify",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},de={cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},le={access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},ce={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},_e={"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Dropbox:{},FTP:{},FeijiPan:{},GoogleDrive:{},GooglePhoto:{},ILanZou:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},pe={"115 Cloud":"115 Cloud","115 Share":"115 Share","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",ChaoXingGroupDrive:"ChaoXingGroupDrive",Cloudreve:"Cloudreve",Crypt:"Crypt",Dropbox:"Dropbox",FTP:"FTP",FeijiPan:"FeijiPan",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",ILanZou:"ILanZou","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",Quqi:"Quqi",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",VTencent:"VTencent",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"},ue={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"115 Share":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",receive_code:"Receive code","receive_code-tips":"receive code of 115 share link",root_folder_id:"Root folder id",share_code:"Share code","share_code-tips":"share code of 115 share link"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":`structure:FolderName:
  [FileSize:][Modified:]Url`,private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal",personal_new:"Personal new"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:w,Aliyundrive:k,AliyundriveOpen:v,AliyundriveShare:S,BaiduNetdisk:P,BaiduPhoto:C,BaiduShare:R,ChaoXingGroupDrive:x,Cloudreve:A,Crypt:T,Dropbox:U,FTP:D,FeijiPan:z,GoogleDrive:O,GooglePhoto:L,ILanZou:F,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:M,Local:B,MediaTrack:I,Mega_nz:q,MoPan:N,Onedrive:j,OnedriveAPP:E,PikPak:V,PikPakShare:W,Quark:G,Quqi:Q,S3:Y,SFTP:H,SMB:K,Seafile:$,Teambition:X,Terabox:Z,Thunder:J,ThunderExpert:ee,Trainbit:oe,UC:te,USS:se,UrlTree:re,VTencent:ie,Virtual:ae,WebDav:ne,WeiYun:de,WoPan:le,YandexDisk:ce,config:_e,drivers:pe},he="Refresh",me="Add",fe="Edit",ge="Manage",ye="Save",be="Update",we="Copied",ke="Deleted successfully",ve="Saved successfully",Se="Updated successfully",Pe="Choose",Ce="Confirm",Re="Cancel",xe="Are you sure you want to delete [{{name}}]?",Ae="Operations",Te="Yes",Ue="No",De="Clear",ze="Select folder",Oe="Select folder or input path",Le="Disable",Fe="Enable",Me="OK",Be="Back",Ie="Have an account?",qe="Go to login",Ne="Close",je="Not currently supported",Ee="Please enter",Ve={refresh:he,add:me,edit:fe,manage:ge,delete:"Delete",save:ye,update:be,copied:we,delete_success:ke,save_success:ve,update_success:Se,choose:Pe,confirm:Ce,cancel:Re,delete_confirm:xe,operations:Ae,yes:Te,no:Ue,clear:De,choose_folder:ze,choose_or_input_path:Oe,disable:Le,enable:Fe,ok:Me,back:Be,have_account:Ie,go_login:qe,close:Ne,no_support_now:je,empty_input:Ee},We={name:"Name",size:"Size",modified:"Modified"},Ge={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",play_with:"Play with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},Qe={list:"List View",grid:"Grid View",image:"Image View"},Ye="No images in the current folder",He="Load more",Ke="No more",$e="Please input password",Xe={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_markdown_toc:"Toggle Outline",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",go_back:"Go back",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",delete_policy:{delete_on_upload_succeed:"Delete on upload succeed",delete_on_upload_failed:"Delete on upload failed",delete_never:"Never delete",delete_always:"Always delete"},download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},Ze={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Je={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory",show_folder_in_image_view:"Show folder in image view",show_folder_in_image_view_options:{top:"Top",bottom:"Bottom",none:"None"},global_default_layout:"Global default layout",global_default_layout_options:{list:"List View",grid:"Grid View",image:"Image View"},position_of_header_navbar:"Position of header & nav bar",position_of_header_navbar_options:{static:"Normal",sticky:"Stick to top of page",only_navbar_sticky:"Only nav bar sticky"},show_sidebar:"Show sidebar",show_sidebar_options:{none:"None",visible:"Visible"},filename_scrollable:"Filename scrollable"},eo={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},oo={powered_by:"Powered by AList",manage:"Manage"},to={search:"Search",no_result:"No result yet",scopes:{all:"All",folder:"Folder",file:"File"}},so="Failed fetching settings: ",ro="Failed get current user: ",io={obj:We,preview:Ge,layouts:Qe,no_images:Ye,load_more:He,no_more:Ke,input_password:$e,toolbar:Xe,upload:Ze,local_settings:Je,package_download:eo,footer:oo,search:to,fetching_settings_failed:so,get_current_user_failed:ro,"Loading storage, please wait":"Loading storage, please wait"},ao="Search index",no="Current indexes",lo="Build indexes",co="Rebuild indexes",_o="Paths to update",po="Max depth",uo="Update indexes",ho="Object count",mo="Last done time",fo="Unknown",go="Stop",yo="Clear",bo="Error",wo={search_index:ao,current:no,build:lo,rebuild:co,paths_to_update:_o,max_depth:po,update:uo,obj_count:ho,last_done_time:mo,unknown:fo,stop:go,clear:yo,error:bo},ko="Login to the",vo="Remember me",So="Forget password?",Po="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Co="Clear",Ro="Login",xo="Browse as a guest",Ao="Login successfully",To={login_to:ko,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:vo,forget:So,forget_url:Po,clear:Co,login:Ro,use_guest:xo,success:Ao},Uo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",user_groups:"User Groups",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",docs:"Documentation",offline_download:"Offline Download",online_download:"Online Download",ldap:"LDAP"},Do="AList Manage",zo="You are not admin user, please login with admin account.",Oo="Logout successfully",Lo="Send",Fo="Receive",Mo="Received messages",Bo={sidemenu:Uo,title:Do,not_admin:zo,logout_success:Oo,send:Lo,receive:Fo,received_msgs:Mo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Io="Path",qo="Password",No="Write",jo="Hide",Eo="Readme",Vo="Render a markdown at the bottom, support content or link",Wo="Header",Go="Render a markdown at the top, support content or link",Qo="Apply to sub folder",Yo="One regular expression per line",Ho={path:Io,password:qo,write:No,hide:jo,readme:Eo,readme_help:Vo,header:Wo,header_help:Go,apply_sub:Qo,hide_help:Yo},Ko="Allow indexed",$o="Allow mounted",Xo="Announcement",Zo="Aria2 secret",Jo="Aria2 uri",et="Audio autoplay",ot="Audio cover",tt="Audio types",st="Auto update index",rt="Customize body",it="Customize head",at="Default page size",nt="External previews",dt="Favicon",lt="Filename char mapping",ct="Forward direct link params",_t="Hide files",pt="Home container",ut={hope_container:"Hope container",max_980px:"Max 980px"},ht="Home icon",mt="Iframe previews",ft="Ignore direct link params",gt="Ignore paths",yt="Image types",bt="Index progress",wt="Ldap default dir",kt="Ldap default permission",vt="Ldap login enabled",St="Ldap login tips",Pt="Ldap manager dn",Ct="Ldap manager password",Rt="Ldap server",xt="Ldap user search base",At="Ldap user search filter",Tt="Link expiration",Ut="Logo",Dt="Main color",zt="Max index depth",Ot="Ocr api",Lt="Package download",Ft="Pagination type",Mt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},Bt="Privacy regs",It="Proxy ignore headers",qt="Proxy types",Nt="Qbittorrent seedtime",jt="Qbittorrent url",Et="Robots txt",Vt="Search index",Wt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",meilisearch:"Meilisearch",none:"None"},Gt="Settings layout",Qt={list:"List",responsive:"Responsive"},Yt="Sign all",Ht="Site title",Kt="Sso application name",$t="Sso auto register",Xt="Sso client id",Zt="Sso client secret",Jt="Sso compatibility mode",es="Sso default dir",os="Sso default permission",ts="Sso endpoint name",ss="Sso jwt public key",rs="Sso login enabled",is="Sso login platform",as={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},ns="Sso oidc username key",ds="Sso organization name",ls="Text types",cs="Token",_s="Version",ps="Video autoplay",us="Video types",hs="Webauthn login enabled",ms={allow_indexed:Ko,allow_mounted:$o,announcement:Xo,aria2_secret:Zo,aria2_uri:Jo,audio_autoplay:et,audio_cover:ot,audio_types:tt,auto_update_index:st,customize_body:rt,customize_head:it,default_page_size:at,external_previews:nt,favicon:dt,filename_char_mapping:lt,forward_direct_link_params:ct,hide_files:_t,home_container:pt,home_containers:ut,home_icon:ht,iframe_previews:mt,ignore_direct_link_params:ft,ignore_paths:gt,"ignore_paths-tips":"one path per line",image_types:yt,index_progress:bt,ldap_default_dir:wt,ldap_default_permission:kt,ldap_login_enabled:vt,ldap_login_tips:St,ldap_manager_dn:Pt,ldap_manager_password:Ct,ldap_server:Rt,ldap_user_search_base:xt,ldap_user_search_filter:At,link_expiration:Tt,logo:Ut,main_color:Dt,max_index_depth:zt,"max_index_depth-tips":"max depth of index",ocr_api:Ot,package_download:Lt,pagination_type:Ft,pagination_types:Mt,privacy_regs:Bt,proxy_ignore_headers:It,proxy_types:qt,qbittorrent_seedtime:Nt,qbittorrent_url:jt,robots_txt:Et,search_index:Vt,search_indexs:Wt,settings_layout:Gt,settings_layouts:Qt,sign_all:Yt,site_title:Ht,sso_application_name:Kt,sso_auto_register:$t,sso_client_id:Xt,sso_client_secret:Zt,sso_compatibility_mode:Jt,sso_default_dir:es,sso_default_permission:os,sso_endpoint_name:ts,sso_jwt_public_key:ss,sso_login_enabled:rs,sso_login_platform:is,sso_login_platforms:as,sso_oidc_username_key:ns,sso_organization_name:ds,text_types:ls,token:cs,version:_s,video_autoplay:ps,video_types:us,webauthn_login_enabled:hs},fs="Aria2",gs="Aria2 Version:",ys="Set aria2",bs="Copy Token",ws="Reset Token",ks="Reset Token Successfully",vs="Unknown type",Ss="Set qBittorrent",Ps="qBittorrent",Cs={aria2:fs,aria2_version:gs,set_aria2:ys,copy_token:bs,reset_token:ws,reset_token_success:ks,unknown_type:vs,set_qbit:Ss,qbittorrent:Ps},Rs={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},xs={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver",table_layout:"Table layout"},As={common:Rs,other:xs},Ts="Download file to local machine",Us="Transfer downloaded file to corresponding storage",Ds="Upload file to corresponding storage",zs="Copy file from a storage to another storage",Os="Completed",Ls="Running",Fs="Clear Succeeded",Ms="Retry",Bs="Retry Failed",Is={0:"Pending",1:"Running",2:"Succeeded",3:"Canceling",4:"Canceled",5:"Errored",6:"Failing",7:"Failed",8:"WaitingRetry",9:"BeforeRetry"},qs={offline_download:Ts,offline_download_transfer:Us,upload:Ds,copy:zs,done:Os,undone:Ls,clear_succeeded:Fs,retry:Ms,retry_failed:Bs,state:Is},Ns={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",online_download:"Can online download",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},js="Username",Es="User group name",Vs="User group size",Ws="Select user group",Gs="The ser group doesn't exit",Qs="Apply to all user group members when saved",Ys="Password",Hs="Base path",Ks="Role",$s="Permission",Xs="Disabled",Zs="Available",Js="Update Profile",er="Update profile successfully, please re-login.",or="Change Username",tr="Change Password",sr="Confirm Password",rr="The password you input twice is not the same",ir="Enable 2FA",ar="Cancel 2FA",nr="Cancel 2FA successfully",dr="Scan the QR code to save the secret key",lr="Or input the secret key manually",cr="Input the code of your 2FA app",_r="Verify",pr="So you cannot modify anything in the manage page.",ur="Single sign-on Login",hr="Connect Single sign-on Platform",mr="Disconnect Single sign-on Platform",fr="WebAuthn",gr="Add a Webauthn credential",yr="Webauthn credential successfully added!",br="Webauthn is not supported in your browser or you are in an unsafe origin",wr={permissions:Ns,username:js,user_group_name:Es,size:Vs,select_user_group:Ws,user_group_not_exist:Gs,apply_to_all:Qs,password:Ys,base_path:Hs,role:Ks,permission:$s,disabled:Xs,available:Zs,update_profile:Js,update_profile_success:er,change_username:or,change_password:tr,"change_password-tips":"Keep the password empty if you don't want to change it",confirm_password:sr,"confirm_password-tips":"Repeat the password that you just input",confirm_password_not_same:rr,enable_2fa:ir,cancel_2fa:ar,cancel_2fa_success:nr,"2fa_already_enabled":"2FA is already enabled",scan_qr:dr,or_manual:lr,input_code:cr,verify:_r,"guest-tips":"You are currently visiting as a guest.",modify_nothing:pr,sso_login:ur,connect_sso:hr,disconnect_sso:mr,webauthn:fr,add_webauthn:gr,add_webauthn_success:yr,webauthn_not_supported:br},o=Object.assign({"./br.json":b,"./drivers.json":ue,"./global.json":Ve,"./home.json":io,"./index.json":s,"./indexes.json":wo,"./login.json":To,"./manage.json":Bo,"./metas.json":Ho,"./settings.json":ms,"./settings_other.json":Cs,"./storages.json":As,"./tasks.json":qs,"./users.json":wr}),kr={};for(const e in o){const t=e.split("/")[1].split(".")[0];kr[t]=o[e]}export{kr as default};
