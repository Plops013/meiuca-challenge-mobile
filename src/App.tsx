import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Linking, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { spacingSizeSm } from './assets/styles/style_variables';
import { Card, Heading } from './shared/components';
import { INews } from './shared/interfaces/INews';
import { newsService } from './shared/services/news';
import { Container, LogoContainer } from './App.styles'

const App = (): JSX.Element => {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    void loadNews();
  }, []);

  const loadNews = async (): Promise<void> => {
    try {
      const newsRequest = (await newsService.getNews()).data.articles;
      setNews(newsRequest);
    } catch (_) { }
  };

  const onPressNews = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (_) { }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <StatusBar barStyle={'light-content'} />
        <FlatList
          style={{ padding: 12 }}
          data={news}
          ListEmptyComponent={(
            <ActivityIndicator />
          )}
          ListHeaderComponent={(
            <TouchableOpacity onPress={() => onPressNews('https://meiuca.co/')}>
              <LogoContainer>
                <Heading>Folha da Meiuca</Heading>
              </LogoContainer>
            </TouchableOpacity>
          )}
          renderItem={(({ item, index, separators }) => (
            <Card
              title={item.title}
              subtitle={item.description}
              text={item.content.split('[')[0]}
              buttonLabel="Ver mais"
              style={{ marginBottom: spacingSizeSm.number }}
              buttonProps={{
                onPress: () => { onPressNews(item.url) },
              }}
            />
          ))}
        />
      </Container>
    </SafeAreaView>
  );
};

export default App;
