export interface Developer {
  id: string;
  name: string;
  email: string;
  location: string;
  availableBounty: number;
  spentBounty: number;
  joinedDate: string;
}

const vietnameseCities = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Cần Thơ",
  "Hải Phòng",
  "Huế",
  "Nha Trang",
  "Biên Hòa",
  "Quy Nhơn",
  "Vũng Tàu",
  "Thái Nguyên",
  "Hải Dương",
  "Nam Định",
  "Thanh Hóa",
  "Quảng Ninh",
  "Hạ Long",
  "Bắc Ninh",
  "Hưng Yên",
  "Phú Thọ",
  "Vĩnh Phúc",
  "Bình Dương",
  "Đồng Nai",
  "Long An",
  "Tiền Giang",
  "Bến Tre",
  "Vĩnh Long",
  "Trà Vinh",
  "Sóc Trăng",
  "Bạc Liêu",
  "Cà Mau",
  "Kiên Giang",
  "An Giang",
  "Đồng Tháp",
  "Tây Ninh",
  "Bình Phước",
  "Bình Thuận",
  "Ninh Thuận",
  "Khánh Hòa",
  "Phú Yên",
  "Bình Định",
  "Quảng Ngãi",
  "Quảng Nam",
  "Quảng Bình",
  "Hà Tĩnh",
  "Nghệ An",
  "Thanh Hóa",
  "Ninh Bình",
  "Hà Nam",
  "Nam Định",
  "Thái Bình",
];

const vietnameseFirstNames = [
  "Nguyễn",
  "Trần",
  "Lê",
  "Phạm",
  "Hoàng",
  "Huỳnh",
  "Phan",
  "Vũ",
  "Võ",
  "Đặng",
  "Bùi",
  "Đỗ",
  "Hồ",
  "Ngô",
  "Dương",
  "Lý",
  "Mai",
  "Đinh",
  "Trịnh",
  "Lương",
];

const vietnameseMiddleNames = [
  "Văn",
  "Thị",
  "Hoàng",
  "Đức",
  "Minh",
  "Xuân",
  "Hữu",
  "Công",
  "Đình",
  "Thành",
];

const vietnameseLastNames = [
  "An",
  "Bình",
  "Cường",
  "Dũng",
  "Em",
  "Giang",
  "Hùng",
  "Hương",
  "Khải",
  "Lan",
  "Minh",
  "Nga",
  "Phúc",
  "Quỳnh",
  "Sơn",
  "Thảo",
  "Uyên",
  "Vân",
  "Xuân",
  "Yến",
  "Bảo",
  "Cẩm",
  "Dung",
  "Đạt",
  "Giang",
  "Hà",
  "Khang",
  "Linh",
  "Mai",
  "Nam",
  "Phương",
  "Quân",
  "Sinh",
  "Thắng",
  "Uy",
  "Việt",
  "Xuân",
  "Yên",
  "Bích",
  "Châu",
];

function removeVietnameseTones(str: string): string {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/[^a-z0-9 ]/g, "");
  str = str.replace(/\s+/g, " ").trim();
  return str;
}

function generateRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const MAX_TOTAL_BOUNTY = 39141;
const MIN_BOUNTY = 500;
const MAX_BOUNTY_PER_DEVELOPER = 3000;
const DEVELOPER_COUNT = 100;

function generateDevelopers(count: number): Developer[] {
  const developers: Developer[] = [];
  const startDate = new Date("2023-01-01");
  const endDate = new Date();

  // Step 1: Generate random weights for each developer
  let weights: number[] = [];
  for (let i = 0; i < count; i++) {
    weights.push(Math.random());
  }
  // Step 2: Normalize weights to sum to 1
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  weights = weights.map((w) => w / totalWeight);

  // Step 3: Calculate availableBounty for each developer
  let availableBounties = weights.map((w) => Math.round(w * MAX_TOTAL_BOUNTY));

  // Step 4: Clamp values to min/max and ensure all are unique
  availableBounties = availableBounties.map((b) =>
    Math.max(MIN_BOUNTY, Math.min(MAX_BOUNTY_PER_DEVELOPER, b))
  );

  // Step 5: If duplicates, add or subtract 1 to make unique (within bounds)
  const seen = new Set();
  for (let i = 0; i < availableBounties.length; i++) {
    while (seen.has(availableBounties[i])) {
      if (availableBounties[i] < MAX_BOUNTY_PER_DEVELOPER) {
        availableBounties[i]++;
      } else if (availableBounties[i] > MIN_BOUNTY) {
        availableBounties[i]--;
      } else {
        break;
      }
    }
    seen.add(availableBounties[i]);
  }

  // Step 6: Adjust the last developer to make the sum exactly MAX_TOTAL_BOUNTY
  const sumSoFar = availableBounties
    .slice(0, count - 1)
    .reduce((a, b) => a + b, 0);
  availableBounties[count - 1] = Math.max(
    MIN_BOUNTY,
    Math.min(MAX_BOUNTY_PER_DEVELOPER, MAX_TOTAL_BOUNTY - sumSoFar)
  );

  for (let i = 1; i <= count; i++) {
    const firstName =
      vietnameseFirstNames[
        Math.floor(Math.random() * vietnameseFirstNames.length)
      ];
    const middleName =
      vietnameseMiddleNames[
        Math.floor(Math.random() * vietnameseMiddleNames.length)
      ];
    const lastName =
      vietnameseLastNames[
        Math.floor(Math.random() * vietnameseLastNames.length)
      ];
    const name = `${firstName} ${middleName} ${lastName}`;

    // Remove Vietnamese tones from email parts
    const emailFirstName = removeVietnameseTones(firstName);
    const emailMiddleName = removeVietnameseTones(middleName);
    const emailLastName = removeVietnameseTones(lastName);
    const email = `${emailFirstName}.${emailMiddleName}.${emailLastName}${i}@gmail.com`;

    const location =
      vietnameseCities[Math.floor(Math.random() * vietnameseCities.length)];

    const availableBounty = availableBounties[i - 1];
    const spentBounty = Math.floor(Math.random() * (availableBounty + 1));
    const joinedDate = generateRandomDate(startDate, endDate)
      .toISOString()
      .split("T")[0];

    developers.push({
      id: i.toString(),
      name,
      email,
      location,
      availableBounty,
      spentBounty,
      joinedDate,
    });
  }

  return developers;
}

export const developers: Developer[] = generateDevelopers(DEVELOPER_COUNT);
