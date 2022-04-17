import React from 'react';

function BottomTabBarIcon({focused, size, color}) {
    let iconName;
        let rn = route.name;

        if (rn === NATIVE_STACK_NAVIGATOR_NAME) {
          iconName = focused ? "home" : "home-outline";
        } else if (rn === SETTINGS_SCREEN_NAME) {
          iconName = focused ? "settings" : "settings-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
}

export default BottomTabBarIcon;