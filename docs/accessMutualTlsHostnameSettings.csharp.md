# `accessMutualTlsHostnameSettings` Submodule <a name="`accessMutualTlsHostnameSettings` Submodule" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessMutualTlsHostnameSettings <a name="AccessMutualTlsHostnameSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings cloudflare_access_mutual_tls_hostname_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessMutualTlsHostnameSettings(Construct Scope, string Id, AccessMutualTlsHostnameSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig">AccessMutualTlsHostnameSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig">AccessMutualTlsHostnameSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings"></a>

```csharp
private void PutSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessMutualTlsHostnameSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessMutualTlsHostnameSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessMutualTlsHostnameSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessMutualTlsHostnameSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessMutualTlsHostnameSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessMutualTlsHostnameSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessMutualTlsHostnameSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessMutualTlsHostnameSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessMutualTlsHostnameSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList">AccessMutualTlsHostnameSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settings"></a>

```csharp
public AccessMutualTlsHostnameSettingsSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList">AccessMutualTlsHostnameSettingsSettingsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessMutualTlsHostnameSettingsConfig <a name="AccessMutualTlsHostnameSettingsConfig" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessMutualTlsHostnameSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    object Settings = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.settings">Settings</a></code> | <code>object</code> | settings block. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#account_id AccessMutualTlsHostnameSettings#account_id}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.settings"></a>

```csharp
public object Settings { get; set; }
```

- *Type:* object

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#settings AccessMutualTlsHostnameSettings#settings}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#zone_id AccessMutualTlsHostnameSettings#zone_id}

---

### AccessMutualTlsHostnameSettingsSettings <a name="AccessMutualTlsHostnameSettingsSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessMutualTlsHostnameSettingsSettings {
    string Hostname,
    object ChinaNetwork = null,
    object ClientCertificateForwarding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.hostname">Hostname</a></code> | <code>string</code> | The hostname that these settings apply to. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.chinaNetwork">ChinaNetwork</a></code> | <code>object</code> | Request client certificates for this hostname in China. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.clientCertificateForwarding">ClientCertificateForwarding</a></code> | <code>object</code> | Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The hostname that these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#hostname AccessMutualTlsHostnameSettings#hostname}

---

##### `ChinaNetwork`<sup>Optional</sup> <a name="ChinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.chinaNetwork"></a>

```csharp
public object ChinaNetwork { get; set; }
```

- *Type:* object

Request client certificates for this hostname in China.

Can only be set to true if this zone is china network enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#china_network AccessMutualTlsHostnameSettings#china_network}

---

##### `ClientCertificateForwarding`<sup>Optional</sup> <a name="ClientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.clientCertificateForwarding"></a>

```csharp
public object ClientCertificateForwarding { get; set; }
```

- *Type:* object

Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/access_mutual_tls_hostname_settings#client_certificate_forwarding AccessMutualTlsHostnameSettings#client_certificate_forwarding}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessMutualTlsHostnameSettingsSettingsList <a name="AccessMutualTlsHostnameSettingsSettingsList" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessMutualTlsHostnameSettingsSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get"></a>

```csharp
private AccessMutualTlsHostnameSettingsSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessMutualTlsHostnameSettingsSettingsOutputReference <a name="AccessMutualTlsHostnameSettingsSettingsOutputReference" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessMutualTlsHostnameSettingsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetChinaNetwork">ResetChinaNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding">ResetClientCertificateForwarding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChinaNetwork` <a name="ResetChinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetChinaNetwork"></a>

```csharp
private void ResetChinaNetwork()
```

##### `ResetClientCertificateForwarding` <a name="ResetClientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding"></a>

```csharp
private void ResetClientCertificateForwarding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput">ChinaNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput">ClientCertificateForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetwork">ChinaNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding">ClientCertificateForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChinaNetworkInput`<sup>Optional</sup> <a name="ChinaNetworkInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput"></a>

```csharp
public object ChinaNetworkInput { get; }
```

- *Type:* object

---

##### `ClientCertificateForwardingInput`<sup>Optional</sup> <a name="ClientCertificateForwardingInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput"></a>

```csharp
public object ClientCertificateForwardingInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `ChinaNetwork`<sup>Required</sup> <a name="ChinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetwork"></a>

```csharp
public object ChinaNetwork { get; }
```

- *Type:* object

---

##### `ClientCertificateForwarding`<sup>Required</sup> <a name="ClientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding"></a>

```csharp
public object ClientCertificateForwarding { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



