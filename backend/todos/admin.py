from django.contrib import admin
from unfold.admin import ModelAdmin  # Unfold’s enhanced admin
from .models import Todo


@admin.register(Todo)
class TodoAdmin(ModelAdmin):
    list_display = ("title",)
    search_fields = ("title", "body")
