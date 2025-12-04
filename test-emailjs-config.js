// Quick test script to verify EmailJS configuration
// Run with: node test-emailjs-config.js

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Read .env file
  const envContent = readFileSync(join(__dirname, '.env'), 'utf-8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });

  // Check if all required variables are present
  const required = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ];

  console.log('📧 EmailJS Configuration Check\n');
  console.log('='.repeat(50));
  
  let allPresent = true;
  required.forEach(key => {
    const value = envVars[key];
    if (value) {
      // Mask sensitive parts
      const masked = key.includes('KEY') 
        ? value.substring(0, 5) + '...' + value.substring(value.length - 3)
        : value;
      console.log(`✅ ${key}: ${masked}`);
    } else {
      console.log(`❌ ${key}: MISSING`);
      allPresent = false;
    }
  });

  console.log('='.repeat(50));
  
  if (allPresent) {
    console.log('\n✅ All EmailJS credentials are configured!');
    console.log('\n📝 Next steps:');
    console.log('1. Start your dev server: npm run dev');
    console.log('2. Navigate to the Contact section');
    console.log('3. Fill out and submit the form');
    console.log('4. Check your Gmail inbox for the message');
  } else {
    console.log('\n❌ Some credentials are missing. Please check your .env file.');
  }
} catch (error) {
  console.error('❌ Error reading .env file:', error.message);
  console.log('\nMake sure the .env file exists in the project root.');
}

