# `hostnameTlsSettingCiphers` Submodule <a name="`hostnameTlsSettingCiphers` Submodule" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostnameTlsSettingCiphers <a name="HostnameTlsSettingCiphers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers cloudflare_hostname_tls_setting_ciphers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new HostnameTlsSettingCiphers(Construct Scope, string Id, HostnameTlsSettingCiphersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig">HostnameTlsSettingCiphersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig">HostnameTlsSettingCiphersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts"></a>

```csharp
private void ResetPorts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HostnameTlsSettingCiphers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

HostnameTlsSettingCiphers.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

HostnameTlsSettingCiphers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

HostnameTlsSettingCiphers.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

HostnameTlsSettingCiphers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HostnameTlsSettingCiphers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostnameTlsSettingCiphers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostnameTlsSettingCiphers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HostnameTlsSettingCiphers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostnameTlsSettingCiphersConfig <a name="HostnameTlsSettingCiphersConfig" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new HostnameTlsSettingCiphersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hostname,
    string[] Value,
    string ZoneId,
    string Id = null,
    double[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname">Hostname</a></code> | <code>string</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value">Value</a></code> | <code>string[]</code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports">Ports</a></code> | <code>double[]</code> | Ports to use within the IP rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---



