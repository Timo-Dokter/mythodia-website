from django.views import View
from django.shortcuts import render


class Dev(View):
    template_name = "core/dev.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
