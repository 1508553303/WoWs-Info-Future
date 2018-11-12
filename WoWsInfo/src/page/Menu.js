import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { isTablet } from 'react-native-device-detection';
import GridView from 'react-native-super-grid';
import { List, Colors, Surface } from 'react-native-paper';
import { FloatingButton } from '../component';
import lang from '../value/lang';

class Menu extends Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
  this.setState({
    expanded: !this.state.expanded
  });

  render() {
    const { container, icon } = styles;

    // Data for the list
    const wiki = [{t: lang.wiki_achievement, i: require('../img/Achievement.png')},
                  {t: lang.wiki_warships, i: require('../img/Warship.png')},
                  {t: lang.wiki_upgrades, i: require('../img/Upgrade.png')},
                  {t: lang.wiki_flags, i: require('../img/Camouflage.png')},
                  {t: lang.wiki_skills, i: require('../img/CommanderSkill.png')},
                  {t: lang.wiki_maps, i: 'map'},
                  {t: lang.wiki_collections, i: require('../img/Collection.png')}];
    // TODO: change links base on player server
    const websites = [{t: lang.website_official_site, d: 'https://worldofwarships.com/'},
                      {t: lang.website_premium, d: 'https://asia.wargaming.net/shop/wows/'},
                      {t: lang.website_global_wiki, d: 'http://wiki.wargaming.net/en/World_of_Warships/'},
                      {t: lang.website_sea_group, d: 'https://sea-group.org/'},
                      {t: lang.website_daily_bounce, d: 'https://thedailybounce.net/category/world-of-warships/'},
                      {t: lang.website_numbers, d: 'https://wows-numbers.com/'},
                      {t: lang.website_today, d: 'https://warships.today/'},
                      {t: lang.website_ranking, d: 'http://maplesyrup.sweet.coocan.jp/wows/ranking/'},
                      {t: lang.website_models, d: 'https://sketchfab.com/tags/world-of-warships'}];
    const youtubers = [{t: lang.youtuber_official, d: 'https://www.youtube.com/user/worldofwarshipsCOM'},
                       {t: lang.youtuber_flambass, d: 'https://www.youtube.com/user/Flambass'},
                       {t: lang.youtuber_notser, d: 'https://www.youtube.com/user/MrNotser'},
                       {t: lang.youtuber_jingles, d: 'https://www.youtube.com/user/BohemianEagle'},
                       {t: lang.youtuber_panzerknacker, d: 'https://www.youtube.com/user/pzkpasch'},
                       {t: lang.youtuber_flamu, d: 'https://www.youtube.com/user/cheesec4t'},
                       {t: lang.youtuber_yuro, d: 'https://www.youtube.com/user/spzjess'},
                       {t: lang.youtuber_iChaseGaming, d: 'https://www.youtube.com/user/ichasegaming'},
                       {t: lang.youtuber_NoZoupForYou, d: 'https://www.youtube.com/user/ZoupGaming'}];

    return (
      <Surface style={container}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 32}}>
            <List.Section title={lang.wiki_section_title}>
              <GridView itemDimension={200} items={wiki} 
                renderItem={item => (
                  <List.Item title={item.t} style={{padding: 0}}
                    left={() => <List.Icon style={icon} color={Colors.blue300} icon={item.i}/>}/>
                )}/>
            </List.Section>
            <List.Section title='Extra'>
              <List.Accordion title='Websites'>
                <List.Item title='World of Warships' description='https://worldofwarships.com/'/>
                <List.Item title='Premium Shop' description='https://asia.wargaming.net/shop/wows/'/>
                <List.Item title='Global Wiki' description='http://wiki.wargaming.net/en/World_of_Warships/'/>
                <List.Item title='Sea Group' description='https://sea-group.org/'/>
                <List.Item title='The Daily Bounce' description='https://thedailybounce.net/category/world-of-warships/'/>
                <List.Item title='WoWS Stats & Numbers' description='https://wows-numbers.com/'/>
                <List.Item title='Warships.Today' description='https://warships.today/'/>
                <List.Item title='Player Ranking' description='http://maplesyrup.sweet.coocan.jp/wows/ranking/'/>
                <List.Item title='Warships Models' description='https://sketchfab.com/tags/world-of-warships'/>
              </List.Accordion>
              <List.Accordion title='YouTubers'>
                <List.Item title='WoWs Official' description='https://www.youtube.com/user/worldofwarshipsCOM'/>
                <List.Item title='Flambass' description='https://www.youtube.com/user/Flambass'/>
                <List.Item title='Notser' description='https://www.youtube.com/user/MrNotser'/>
                <List.Item title='The Mighty Jingles' description='https://www.youtube.com/user/BohemianEagle'/>
                <List.Item title='Panzerknacker' description='https://www.youtube.com/user/pzkpasch'/>
                <List.Item title='Flamu' description='https://www.youtube.com/user/cheesec4t'/>
                <List.Item title='Yuro' description='https://www.youtube.com/user/spzjess'/>
                <List.Item title='iChaseGaming' description='https://www.youtube.com/user/ichasegaming'/>
                <List.Item title='NoZoupForYou' description='https://www.youtube.com/user/ZoupGaming'/>
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </SafeAreaView>
        <FloatingButton mode='Home'/>
      </Surface>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: isTablet ? '61%' : '100%',
    alignSelf: 'center'
  },
  icon: {
    backgroundColor: Colors.blueGrey50, 
    borderRadius: 100
  }
});

export { Menu };