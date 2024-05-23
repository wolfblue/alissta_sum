
  Pod::Spec.new do |s|
    s.name = 'CordovaPlugins'
    s.version = '5.3.0'
    s.summary = 'Autogenerated spec'
    s.license = 'Unknown'
    s.homepage = 'https://example.com'
    s.authors = { 'Capacitor Generator' => 'hi@example.com' }
    s.source = { :git => 'https://github.com/ionic-team/does-not-exist.git', :tag => '5.3.0' }
    s.source_files = 'sources/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '13.0'
    s.xcconfig = {'GCC_PREPROCESSOR_DEFINITIONS' => '$(inherited) COCOAPODS=1 WK_WEB_VIEW_ONLY=1' }
    s.dependency 'CapacitorCordova'
    s.swift_version  = '5.1'
    s.weak_frameworks = 'ImageIO', 'AudioToolbox', 'SystemConfiguration'
    s.frameworks = 'StoreKit', 'CoreLocation', 'CoreGraphics', 'AssetsLibrary', 'MobileCoreServices', 'AVFoundation', 'CoreTelephony'
    s.compiler_flags = '-w -w -DSQLITE_THREADSAFE=1 -DSQLITE_DEFAULT_SYNCHRONOUS=3 -DSQLITE_DEFAULT_MEMSTATUS=0 -DSQLITE_OMIT_DECLTYPE -DSQLITE_OMIT_DEPRECATED -DSQLITE_OMIT_PROGRESS_CALLBACK -DSQLITE_OMIT_SHARED_CACHE -DSQLITE_TEMP_STORE=2 -DSQLITE_OMIT_LOAD_EXTENSION -DSQLITE_ENABLE_FTS3 -DSQLITE_ENABLE_FTS3_PARENTHESIS -DSQLITE_ENABLE_FTS4 -DSQLITE_ENABLE_RTREE -DSQLITE_DEFAULT_PAGE_SIZE=4096'
  end