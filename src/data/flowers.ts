import type { FlowerBookResponse } from '../types'

// Draft sample: 12 real rows from the backend seed
// (../flower-doro-api/migrations/000001_init_flowerdoro.up.sql).
// Production replaces this with GET /api/v1/users/:id/flower-book.
export const sampleFlowerBook: FlowerBookResponse = {
  total: 12,
  unlocked_total: 7,
  flowers: [
    {
      unlocked: true,
      collected_count: 14,
      flower: {
        id: 1,
        kind: 'daisy',
        sort_order: 1,
        english_name: 'Daisy',
        vietnamese_name: 'Cúc họa mi',
        english_description:
          'A bright field flower often linked with fresh starts and simple joy.',
        vietnamese_description:
          'Cúc họa mi có cánh trắng giản dị ôm quanh nhụy vàng tươi.',
        english_fact_1: 'A flower associated with simple white petals and a sunny center.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Thường gợi cảm giác trong trẻo, đồng cỏ và những khởi đầu nhẹ nhàng.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'daisy',
      },
    },
    {
      unlocked: true,
      collected_count: 9,
      flower: {
        id: 2,
        kind: 'rose',
        sort_order: 2,
        english_name: 'Rose',
        vietnamese_name: 'Hoa hồng',
        english_description:
          'A classic garden bloom known for layered petals, fragrance, and symbolism.',
        vietnamese_description:
          'Hoa hồng nổi bật với nhiều lớp cánh mềm và hương thơm cổ điển.',
        english_fact_1: 'A flower cultivated for centuries in many colors and fragrances.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Được trồng từ rất lâu đời, mỗi màu hoa hồng thường mang một ý nghĩa riêng.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'rose',
      },
    },
    {
      unlocked: true,
      collected_count: 6,
      flower: {
        id: 3,
        kind: 'sunflower',
        sort_order: 3,
        english_name: 'Sunflower',
        vietnamese_name: 'Hướng dương',
        english_description:
          'A tall, sunny bloom famous for turning its face toward the light.',
        vietnamese_description:
          'Hướng dương có bông lớn màu vàng và dáng vươn cao về phía nắng.',
        english_fact_1: 'A flower head made from many tiny flowers packed together.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Một đầu hoa hướng dương thật ra gồm rất nhiều hoa nhỏ xếp sát nhau.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'sunflower',
      },
    },
    {
      unlocked: true,
      collected_count: 4,
      flower: {
        id: 4,
        kind: 'tulip',
        sort_order: 4,
        english_name: 'Tulip',
        vietnamese_name: 'Tulip',
        english_description:
          'A spring bulb flower with smooth cup-shaped petals and bold colors.',
        vietnamese_description:
          'Tulip là hoa củ mùa xuân với dáng cúp mượt và màu sắc rõ nét.',
        english_fact_1: 'A bulb flower strongly associated with spring gardens.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Những luống tulip thường báo hiệu mùa xuân ở các khu vườn ôn đới.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'tulip',
      },
    },
    {
      unlocked: true,
      collected_count: 2,
      flower: {
        id: 5,
        kind: 'lotus',
        sort_order: 5,
        english_name: 'Lotus',
        vietnamese_name: 'Hoa sen',
        english_description:
          'A water flower that rises from muddy ponds and opens clean above the surface.',
        vietnamese_description:
          'Hoa sen mọc từ bùn nước nhưng nở thanh sạch trên mặt ao.',
        english_fact_1: 'An aquatic bloom with leaves that naturally repel water.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Lá sen có bề mặt đẩy nước, làm giọt nước lăn đi rất dễ dàng.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'lotus',
      },
    },
    {
      unlocked: true,
      collected_count: 3,
      flower: {
        id: 6,
        kind: 'lavender',
        sort_order: 6,
        english_name: 'Lavender',
        vietnamese_name: 'Oải hương',
        english_description:
          'A fragrant purple herb-flower often used for calm scents and small bouquets.',
        vietnamese_description:
          'Oải hương có chùm hoa tím thơm, thường gắn với cảm giác thư thái.',
        english_fact_1: 'A flower spike loved for its calming scent.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Các cành hoa nhỏ được phơi khô để giữ hương trong túi thơm và bó hoa.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'lavender',
      },
    },
    {
      unlocked: true,
      collected_count: 1,
      flower: {
        id: 7,
        kind: 'orchid',
        sort_order: 7,
        english_name: 'Orchid',
        vietnamese_name: 'Hoa lan',
        english_description:
          'An elegant flower family with sculptural petals and many rare-looking shapes.',
        vietnamese_description:
          'Hoa lan có dáng cánh tinh tế và rất nhiều hình dạng lạ mắt.',
        english_fact_1: 'One of the largest and most varied flowering plant families.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Lan là một trong những họ thực vật có hoa đa dạng nhất thế giới.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'orchid',
      },
    },
    {
      unlocked: false,
      collected_count: 0,
      flower: {
        id: 9,
        kind: 'poppy',
        sort_order: 9,
        english_name: 'Poppy',
        vietnamese_name: 'Hoa anh túc',
        english_description:
          'A vivid, papery flower with a dark center and a strong wildflower silhouette.',
        vietnamese_description:
          'Hoa anh túc có cánh mỏng như giấy và nhụy đậm nổi bật.',
        english_fact_1: 'A flower known for thin petals and open sunny habitats.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Dáng hoa mở rộng rất hợp với những bãi hoa nắng và cảnh đồng nội.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'poppy',
      },
    },
    {
      unlocked: false,
      collected_count: 0,
      flower: {
        id: 11,
        kind: 'peony',
        sort_order: 11,
        english_name: 'Peony',
        vietnamese_name: 'Mẫu đơn',
        english_description:
          'A lush perennial bloom with many soft petals and a romantic garden presence.',
        vietnamese_description:
          'Mẫu đơn có nhiều lớp cánh mềm, tạo vẻ đầy đặn và sang trọng.',
        english_fact_1: 'A long-lived perennial often prized for full, layered blooms.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Cây lâu năm này thường được yêu thích vì bông lớn và mùa nở rực rỡ.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'peony',
      },
    },
    {
      unlocked: false,
      collected_count: 0,
      flower: {
        id: 14,
        kind: 'jasmine',
        sort_order: 14,
        english_name: 'Jasmine',
        vietnamese_name: 'Hoa nhài',
        english_description: 'A small starry flower known for sweet evening fragrance.',
        vietnamese_description:
          'Hoa nhài nhỏ hình sao, tỏa hương ngọt nhất là vào chiều tối.',
        english_fact_1: 'A fragrant flower used in teas, perfumes, and garden arches.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Hoa nhài xuất hiện trong trà, nước hoa và các giàn leo thơm.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'jasmine',
      },
    },
    {
      unlocked: false,
      collected_count: 0,
      flower: {
        id: 34,
        kind: 'wisteria',
        sort_order: 34,
        english_name: 'Wisteria',
        vietnamese_name: 'Tử đằng',
        english_description: 'A climbing vine with hanging chains of purple flowers.',
        vietnamese_description:
          'Tử đằng là dây leo gỗ với những chùm hoa tím rủ dài.',
        english_fact_1: 'A woody vine famous for cascading spring racemes.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Khi nở rộ, các chuỗi hoa tạo thành màn thác mềm trên giàn.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'wisteria',
      },
    },
    {
      unlocked: true,
      collected_count: 1,
      flower: {
        id: 57,
        kind: 'edelweiss',
        sort_order: 57,
        english_name: 'Edelweiss',
        vietnamese_name: 'Nhung tuyết',
        english_description: 'A pale alpine flower with woolly star-shaped bracts.',
        vietnamese_description:
          'Nhung tuyết có lá bắc trắng như sao, phủ lông mềm để chịu núi cao.',
        english_fact_1: 'An alpine bloom adapted to high mountain conditions.',
        english_fact_2:
          'Its varieties can differ widely in color, size, scent, or blooming season.',
        english_fact_3: 'In FlowerDoro, this bloom adds another collectible shape to the garden.',
        vietnamese_fact_1:
          'Loài hoa alpine này thích nghi với nắng gắt và khí hậu lạnh trên cao.',
        vietnamese_fact_2:
          'Các giống khác nhau có thể khác về màu sắc, kích thước, hương thơm hoặc mùa nở.',
        vietnamese_fact_3:
          'Trong FlowerDoro, bông hoa này thêm một dáng sưu tầm mới cho khu vườn.',
        rarity: 'common',
        asset_name: 'edelweiss',
      },
    },
  ],
}
