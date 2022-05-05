import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import {
    SETTINGS_SCREEN_NAME,
    COURSE_DETAILS_SCREEN_NAME,
    HOME_SCREEN_NAME,
    NOTIFICATIONS_SCREEN_NAME
} from '../constants/routeNames';

export default function DrawerContent(props) {
    const [isLoggined, setIsLoggined] = useState(true);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {isLoggined ?
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={require('../assets/icons/profile.png')}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>UserName</Title>
                                    <Caption style={styles.caption}>user@vku.udn.vn</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Caption style={styles.caption}>Class </Caption>
                                    <Paragraph style={[styles.paragraph, styles.caption]}> 20GIT</Paragraph>
                                </View>
                                <View style={styles.section}>
                                    <Caption style={styles.caption}>Der. </Caption>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>Computer Science</Paragraph>
                                </View>
                            </View>
                        </View>
                        : <DrawerItem
                            icon={({ color, size }) => (
                                <FontAweSome5
                                    name="sign-in-alt"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sign In"
                        // onPress={() => { loggin() }}
                        />
                    }

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate(HOME_SCREEN_NAME) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bell-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Notificattion"
                            onPress={() => { props.navigation.navigate(NOTIFICATIONS_SCREEN_NAME) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Setting"
                            onPress={() => { props.navigation.navigate(SETTINGS_SCREEN_NAME) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Courses">
                        <DrawerItem
                            label="Android Studio"
                            onPress={() => { props.navigation.navigate(COURSE_DETAILS_SCREEN_NAME) }}
                        />
                        <DrawerItem
                            label="Android Studio"
                            onPress={() => { props.navigation.navigate(COURSE_DETAILS_SCREEN_NAME) }}
                        />
                        <DrawerItem
                            label="Android Studio"
                            onPress={() => { props.navigation.navigate(COURSE_DETAILS_SCREEN_NAME) }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {isLoggined ?
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign Out"
                    // onPress={() => { signOut() }}
                    />
                </Drawer.Section>
                : null
            }
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});