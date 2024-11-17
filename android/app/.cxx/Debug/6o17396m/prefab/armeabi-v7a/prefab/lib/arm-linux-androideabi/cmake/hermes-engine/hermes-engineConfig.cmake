if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/lucia/.gradle/caches/8.10.2/transforms/253d7e143d25d274b384863d0c7d5f76/transformed/hermes-android-0.76.2-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/lucia/.gradle/caches/8.10.2/transforms/253d7e143d25d274b384863d0c7d5f76/transformed/hermes-android-0.76.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

