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
│   ├── NavigationRoute.js
│   ├── FavoritesStack.js
│   ├── SearchStack.js
│   └── HomeStack.js
├── redux/
│   ├── addFavoriteSlice.js
│   ├── addFavoriteAction.js
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

## Projeye Ait Görseller

![WhatsApp Image 2025-05-12 at 2 25 29 PM (3)](https://github.com/user-attachments/assets/ba0bd538-15aa-4aa2-a663-aed1f938fea2)
![WhatsApp Image 2025-05-12 at 2 25 29 PM (1)](https://github.com/user-attachments/assets/cf89b6c8-e156-472d-b2b2-6cc717f12b43)
![WhatsApp Image 2025-05-12 at 2 25 29 PM](https://github.com/user-attachments/assets/3c113b66-223f-4451-81e5-523ad0feb317)
![WhatsApp Image 2025-05-12 at 2 25 29 PM (2)](https://github.com/user-attachments/assets/b1f4ea3a-1d0b-41d2-965c-8ce264fabd1f)



