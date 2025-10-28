from django.test import TestCase
from .models import Todo

class TodoModelTest(TestCase):
    def setUp(self):
        self.todo = Todo.objects.create(
            title="Buy groceries",
            body="Milk, Bread, Eggs, Butter"
        )

    def test_todo_creation(self):
        """Ensure the Todo object is created correctly"""
        self.assertEqual(self.todo.title, "Buy groceries")
        self.assertEqual(self.todo.body, "Milk, Bread, Eggs, Butter")
        self.assertTrue(isinstance(self.todo, Todo))

    def test_str_representation(self):
        """Ensure __str__ returns the title"""
        self.assertEqual(str(self.todo), "Buy groceries")

    def test_max_length_title(self):
        """Check max_length constraint on title"""
        field = self.todo._meta.get_field('title')
        self.assertEqual(field.max_length, 200)
