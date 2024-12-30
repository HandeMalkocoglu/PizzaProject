describe('Pizza Siparişi Testleri', () => {
    beforeEach(() => {
      // Her test öncesi URL'ye gidiliyor
      cy.visit('http://localhost:5173/'); // URL'yi projenize göre değiştirin
    });
  
    it('Ad ve Soyad inputuna metin girer', () => {
      cy.get('[name="name"]') // Ad ve Soyad input alanını seç
        .type('Ali Veli') // Metin gir
        .should('have.value', 'Ali Veli'); // Doğrulama: Girilen metin doğru mu?
    });
  
    it('Ekstra malzemelerden birden fazla seçim yapılabilir', () => {
      // Checkbox değerlerini seçmek için topluca işlem yapılıyor
      cy.get('[name="toppings"]') // Ekstra malzeme checkbox'larını seç
        .check(['Sucuk', 'Mantar', 'Mozzarella']) // Birden fazla checkbox işaretle
        .should('be.checked'); // Doğrulama: Checkbox'lar seçili mi?
    });
  
    it('Formu başarıyla gönderir', () => {
      // Tüm zorunlu alanları doldur
      cy.get('[name="name"]').type('Ali Veli'); // İsim gir
      cy.get('[name="size"]').check('Orta'); // Pizza boyutunu seç
      cy.get('[name="hamur"]').select('İnce Kenar'); // Hamur seçimi
      cy.get('[name="toppings"]').check(['Pepperoni', 'Mantar', 'Mozzarella']); // Malzeme seçimi
  
      // Pizza sayısını artır
      cy.get('.pizza-count button:last-child').click();
  
      // Formu gönder
      cy.get('form').submit();
  
      // Doğrulama: Başarılı sipariş mesajı görünüyor mu?
      cy.contains('Siparişiniz başarıyla alındı!').should('be.visible');
    });
  
    it('Minimum 4 malzeme seçimi hatasını kontrol eder', () => {
      cy.get('[name="toppings"]').check(['Mantar']); // Sadece 1 malzeme seçiliyor
  
      cy.get('form').submit(); // Formu gönder
  
      // Doğrulama: Hata mesajı görüntüleniyor mu?
      cy.contains('En az 4 ve en fazla 10 malzeme seçebilirsiniz.').should(
        'be.visible'
      );
    });
  
    it('İsim alanına 2 karakterden az değer girildiğinde hata verir', () => {
      cy.get('[name="name"]').type('Al'); // İsim alanına 2 karakter gir
      cy.get('form').submit(); // Formu gönder
  
      // Doğrulama: Hata mesajı görüntüleniyor mu?
      cy.contains('İsim en az 3 karakter olmalı.').should('be.visible');
    });
  });
  