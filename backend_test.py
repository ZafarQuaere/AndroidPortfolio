#!/usr/bin/env python3
"""
Backend API Testing for Contact Form Functionality
Tests all contact form endpoints with various scenarios
"""

import requests
import json
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except FileNotFoundError:
        return "http://localhost:8001"
    return "http://localhost:8001"

BASE_URL = get_backend_url()
API_URL = f"{BASE_URL}/api"

print(f"Testing backend at: {API_URL}")

class ContactFormTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        
    def log_test(self, test_name, passed, details=""):
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            status = "❌ FAIL"
        
        result = f"{status}: {test_name}"
        if details:
            result += f" - {details}"
        
        print(result)
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'details': details
        })
        
    def test_api_root(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{API_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Portfolio API" in data["message"]:
                    self.log_test("API Root Endpoint", True, f"Status: {response.status_code}")
                else:
                    self.log_test("API Root Endpoint", False, f"Unexpected response: {data}")
            else:
                self.log_test("API Root Endpoint", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_test("API Root Endpoint", False, f"Error: {str(e)}")
    
    def test_contact_form_valid_data(self):
        """Test POST /api/contact with valid data"""
        valid_data = {
            "name": "John Doe",
            "email": "john@example.com", 
            "subject": "Job Inquiry",
            "message": "Hello, I'm interested in working with you. I have 5 years of experience in software development."
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=valid_data, timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("contact_id"):
                    self.log_test("Contact Form - Valid Data", True, f"Contact ID: {data['contact_id']}")
                    return data["contact_id"]
                else:
                    self.log_test("Contact Form - Valid Data", False, f"Invalid response structure: {data}")
            else:
                self.log_test("Contact Form - Valid Data", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Contact Form - Valid Data", False, f"Error: {str(e)}")
        return None
    
    def test_contact_form_invalid_data(self):
        """Test POST /api/contact with various invalid data scenarios"""
        
        # Test empty name
        invalid_data_1 = {
            "name": "",
            "email": "john@example.com",
            "subject": "Test Subject",
            "message": "This is a test message that is long enough."
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=invalid_data_1, timeout=10)
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact Form - Empty Name", True, "Validation error as expected")
            else:
                self.log_test("Contact Form - Empty Name", False, f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form - Empty Name", False, f"Error: {str(e)}")
        
        # Test invalid email
        invalid_data_2 = {
            "name": "John Doe",
            "email": "invalid-email",
            "subject": "Test Subject",
            "message": "This is a test message that is long enough."
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=invalid_data_2, timeout=10)
            if response.status_code == 422:
                self.log_test("Contact Form - Invalid Email", True, "Validation error as expected")
            else:
                self.log_test("Contact Form - Invalid Email", False, f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form - Invalid Email", False, f"Error: {str(e)}")
        
        # Test short subject
        invalid_data_3 = {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Hi",  # Too short (min 5 chars)
            "message": "This is a test message that is long enough."
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=invalid_data_3, timeout=10)
            if response.status_code == 422:
                self.log_test("Contact Form - Short Subject", True, "Validation error as expected")
            else:
                self.log_test("Contact Form - Short Subject", False, f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form - Short Subject", False, f"Error: {str(e)}")
        
        # Test short message
        invalid_data_4 = {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Test Subject",
            "message": "Short"  # Too short (min 10 chars)
        }
        
        try:
            response = requests.post(f"{API_URL}/contact", json=invalid_data_4, timeout=10)
            if response.status_code == 422:
                self.log_test("Contact Form - Short Message", True, "Validation error as expected")
            else:
                self.log_test("Contact Form - Short Message", False, f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form - Short Message", False, f"Error: {str(e)}")
    
    def test_contact_messages_retrieval(self):
        """Test GET /api/contact/messages"""
        try:
            response = requests.get(f"{API_URL}/contact/messages", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Contact Messages Retrieval", True, f"Retrieved {len(data)} messages")
                    return data
                else:
                    self.log_test("Contact Messages Retrieval", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Contact Messages Retrieval", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_test("Contact Messages Retrieval", False, f"Error: {str(e)}")
        return []
    
    def test_contact_stats(self):
        """Test GET /api/contact/stats"""
        try:
            response = requests.get(f"{API_URL}/contact/stats", timeout=10)
            if response.status_code == 200:
                data = response.json()
                required_fields = ["total_messages", "unread_messages", "read_messages"]
                if all(field in data for field in required_fields):
                    self.log_test("Contact Stats", True, f"Stats: {data}")
                else:
                    self.log_test("Contact Stats", False, f"Missing required fields in: {data}")
            else:
                self.log_test("Contact Stats", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_test("Contact Stats", False, f"Error: {str(e)}")
    
    def test_message_structure(self, messages):
        """Test that retrieved messages have correct structure"""
        if not messages:
            self.log_test("Message Structure", False, "No messages to test")
            return
        
        required_fields = ["id", "name", "email", "subject", "message", "timestamp", "read"]
        
        for i, message in enumerate(messages[:3]):  # Test first 3 messages
            missing_fields = [field for field in required_fields if field not in message]
            if not missing_fields:
                self.log_test(f"Message Structure - Message {i+1}", True, "All required fields present")
            else:
                self.log_test(f"Message Structure - Message {i+1}", False, f"Missing fields: {missing_fields}")
    
    def test_database_persistence(self, contact_id):
        """Test that messages are properly saved and can be retrieved"""
        if not contact_id:
            self.log_test("Database Persistence", False, "No contact ID to verify")
            return
        
        # Get messages and check if our test message is there
        messages = self.test_contact_messages_retrieval()
        
        # Look for our test message by contact_id
        found_message = None
        for message in messages:
            if message.get("id") == contact_id:
                found_message = message
                break
        
        if found_message:
            # Verify the message content matches what we sent
            if (found_message.get("name") == "John Doe" and 
                found_message.get("email") == "john@example.com" and
                found_message.get("subject") == "Job Inquiry"):
                self.log_test("Database Persistence", True, "Message correctly saved and retrieved")
            else:
                self.log_test("Database Persistence", False, "Message content doesn't match")
        else:
            self.log_test("Database Persistence", False, f"Message with ID {contact_id} not found in database")
    
    def run_all_tests(self):
        """Run all contact form tests"""
        print("=" * 60)
        print("CONTACT FORM BACKEND API TESTING")
        print("=" * 60)
        
        # Test API root
        self.test_api_root()
        
        # Test contact form submission with valid data
        contact_id = self.test_contact_form_valid_data()
        
        # Test contact form with invalid data
        self.test_contact_form_invalid_data()
        
        # Test message retrieval
        messages = self.test_contact_messages_retrieval()
        
        # Test message structure
        self.test_message_structure(messages)
        
        # Test contact stats
        self.test_contact_stats()
        
        # Test database persistence
        self.test_database_persistence(contact_id)
        
        # Print summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.total_tests - self.passed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests)*100:.1f}%")
        
        if self.passed_tests == self.total_tests:
            print("\n🎉 ALL TESTS PASSED! Contact form backend is working correctly.")
        else:
            print(f"\n⚠️  {self.total_tests - self.passed_tests} test(s) failed. Check the details above.")
        
        return self.passed_tests == self.total_tests

if __name__ == "__main__":
    tester = ContactFormTester()
    success = tester.run_all_tests()
    exit(0 if success else 1)