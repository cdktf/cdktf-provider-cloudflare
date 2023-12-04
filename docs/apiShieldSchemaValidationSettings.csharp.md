# `apiShieldSchemaValidationSettings` Submodule <a name="`apiShieldSchemaValidationSettings` Submodule" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldSchemaValidationSettings <a name="ApiShieldSchemaValidationSettings" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ApiShieldSchemaValidationSettings(Construct Scope, string Id, ApiShieldSchemaValidationSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig">ApiShieldSchemaValidationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig">ApiShieldSchemaValidationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction">ResetValidationOverrideMitigationAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetValidationOverrideMitigationAction` <a name="ResetValidationOverrideMitigationAction" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.resetValidationOverrideMitigationAction"></a>

```csharp
private void ResetValidationOverrideMitigationAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldSchemaValidationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldSchemaValidationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldSchemaValidationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldSchemaValidationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiShieldSchemaValidationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput">ValidationDefaultMitigationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput">ValidationOverrideMitigationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction">ValidationDefaultMitigationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction">ValidationOverrideMitigationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ValidationDefaultMitigationActionInput`<sup>Optional</sup> <a name="ValidationDefaultMitigationActionInput" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationActionInput"></a>

```csharp
public string ValidationDefaultMitigationActionInput { get; }
```

- *Type:* string

---

##### `ValidationOverrideMitigationActionInput`<sup>Optional</sup> <a name="ValidationOverrideMitigationActionInput" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationActionInput"></a>

```csharp
public string ValidationOverrideMitigationActionInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ValidationDefaultMitigationAction`<sup>Required</sup> <a name="ValidationDefaultMitigationAction" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationDefaultMitigationAction"></a>

```csharp
public string ValidationDefaultMitigationAction { get; }
```

- *Type:* string

---

##### `ValidationOverrideMitigationAction`<sup>Required</sup> <a name="ValidationOverrideMitigationAction" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.validationOverrideMitigationAction"></a>

```csharp
public string ValidationOverrideMitigationAction { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldSchemaValidationSettingsConfig <a name="ApiShieldSchemaValidationSettingsConfig" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ApiShieldSchemaValidationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ValidationDefaultMitigationAction,
    string ZoneId,
    string Id = null,
    string ValidationOverrideMitigationAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction">ValidationDefaultMitigationAction</a></code> | <code>string</code> | The default mitigation action used when there is no mitigation action defined on the operation. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#id ApiShieldSchemaValidationSettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction">ValidationOverrideMitigationAction</a></code> | <code>string</code> | When set, this overrides both zone level and operation level mitigation actions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ValidationDefaultMitigationAction`<sup>Required</sup> <a name="ValidationDefaultMitigationAction" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationDefaultMitigationAction"></a>

```csharp
public string ValidationDefaultMitigationAction { get; set; }
```

- *Type:* string

The default mitigation action used when there is no mitigation action defined on the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#validation_default_mitigation_action ApiShieldSchemaValidationSettings#validation_default_mitigation_action}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#zone_id ApiShieldSchemaValidationSettings#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#id ApiShieldSchemaValidationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ValidationOverrideMitigationAction`<sup>Optional</sup> <a name="ValidationOverrideMitigationAction" id="@cdktf/provider-cloudflare.apiShieldSchemaValidationSettings.ApiShieldSchemaValidationSettingsConfig.property.validationOverrideMitigationAction"></a>

```csharp
public string ValidationOverrideMitigationAction { get; set; }
```

- *Type:* string

When set, this overrides both zone level and operation level mitigation actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/api_shield_schema_validation_settings#validation_override_mitigation_action ApiShieldSchemaValidationSettings#validation_override_mitigation_action}

---



