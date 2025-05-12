# React Native Book Favorites App

Bu proje, kullanıcıların kitapları favorilere ekleyip çıkarabildiği basit bir **React Native** uygulamasıdır. Favoriler, cihazda kalıcı olarak saklanır ve uygulama yeniden başlatıldığında da korunur.


## Özellikler

- 📖 Kitap detaylarını görüntüleme  
- ⭐ Favorilere kitap ekleyip çıkarma  
- 📚 Favori kitapları listeleme  
- 💾 Favoriler cihazda kalıcı olarak saklanır (`AsyncStorage`)  
- ⚛️ Modern React yapıları (Hooks, Redux Toolkit) kullanılmıştır  


## Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [Expo Go](https://expo.dev/)


## Kurulum

```bash
git clone https://github.com/kullaniciAdi/book-favorites-app.git
cd book-favorites-app
npm install
````

## Uygulamayı Başlatma

**Expo ile çalıştırmak için:**

```bash
npx expo start
```

veya

```bash
npm start
```

> `package.json` dosyanızda `start` script’inin tanımlı olduğundan emin olun.


## Proje Yapısı

```
src/
├── screens/
│   ├── FavoritesScreen.js
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   └── BookDetailScreen.js
├── navigation/
│   ├── FavoritesScreen.js
│   └── BookDetailScreen.js
├── redux/
│   ├── addFavoriteSlice.js
│   ├── bookSlice.js
│   └── searchSlice.js
├── store/
│   └── store.js
└── App.js
```

## Durum Yönetimi

* Uygulama genelinde favori kitapların yönetimi **Redux Toolkit** ile yapılmaktadır.
* Favoriler **AsyncStorage** üzerinden kalıcı olarak saklanır.
* Favoriler, uygulama açıldığında otomatik olarak yüklenir (`loadFavoritesFromStorage` thunk ile).

## Katkıda Bulunmak

Katkı sağlamak isterseniz `pull request` açabilir ya da `issue` oluşturabilirsiniz.
