# `apiShieldDiscoveryOperation` Submodule <a name="`apiShieldDiscoveryOperation` Submodule" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldDiscoveryOperation <a name="ApiShieldDiscoveryOperation" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ApiShieldDiscoveryOperation(Construct Scope, string Id, ApiShieldDiscoveryOperationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig">ApiShieldDiscoveryOperationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig">ApiShieldDiscoveryOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetState` <a name="ResetState" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldDiscoveryOperation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldDiscoveryOperation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldDiscoveryOperation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ApiShieldDiscoveryOperation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiShieldDiscoveryOperation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiShieldDiscoveryOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_discovery_operation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldDiscoveryOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput">OperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId">OperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput"></a>

```csharp
public string OperationIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId"></a>

```csharp
public string OperationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldDiscoveryOperationConfig <a name="ApiShieldDiscoveryOperationConfig" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ApiShieldDiscoveryOperationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OperationId,
    string ZoneId,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId">OperationId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state">State</a></code> | <code>string</code> | Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId"></a>

```csharp
public string OperationId { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_discovery_operation#operation_id ApiShieldDiscoveryOperation#operation_id}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_discovery_operation#zone_id ApiShieldDiscoveryOperation#zone_id}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_discovery_operation#state ApiShieldDiscoveryOperation#state}

---



