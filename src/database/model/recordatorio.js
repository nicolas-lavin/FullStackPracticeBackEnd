/*
class Tipo_persona(models.Model):
    tipo = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.tipo

class Persona(models.Model):
    rut = models.CharField(primary_key=True,max_length=15)
    nombre = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    tipo = models.ForeignKey(Tipo_persona,null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.rut

class Registro(models.Model):
    rut = models.ForeignKey(Persona,on_delete=models.CASCADE)
    fecha_registro = models.DateField(auto_now_add=True)
    hora_registro = models.TimeField(auto_now_add=True)
*/