if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/lucia/.gradle/caches/8.10.2/transforms/f58eb0422ef4aa39ff528dd0a71b1a55/transformed/fbjni-0.6.0/prefab/modules/fbjni/libs/android.armeabi-v7a/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/lucia/.gradle/caches/8.10.2/transforms/f58eb0422ef4aa39ff528dd0a71b1a55/transformed/fbjni-0.6.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

