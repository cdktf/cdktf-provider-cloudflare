# `cloudforceOneRequestAsset` Submodule <a name="`cloudforceOneRequestAsset` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequestAsset <a name="CloudforceOneRequestAsset" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudforceOneRequestAsset(Construct Scope, string Id, CloudforceOneRequestAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig">CloudforceOneRequestAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig">CloudforceOneRequestAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudforceOneRequestAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudforceOneRequestAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequestAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fileType">FileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.pageInput">PageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPageInput">PerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdInput">RequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.page">Page</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fileType"></a>

```csharp
public string FileType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.pageInput"></a>

```csharp
public double PageInput { get; }
```

- *Type:* double

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPageInput"></a>

```csharp
public double PerPageInput { get; }
```

- *Type:* double

---

##### `RequestIdInput`<sup>Optional</sup> <a name="RequestIdInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdInput"></a>

```csharp
public string RequestIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.page"></a>

```csharp
public double Page { get; }
```

- *Type:* double

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestAssetConfig <a name="CloudforceOneRequestAssetConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudforceOneRequestAssetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    double Page,
    double PerPage,
    string RequestId,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.page">Page</a></code> | <code>double</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.perPage">PerPage</a></code> | <code>double</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.requestId">RequestId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.source">Source</a></code> | <code>string</code> | Asset file to upload. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#account_id CloudforceOneRequestAsset#account_id}

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.page"></a>

```csharp
public double Page { get; set; }
```

- *Type:* double

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#page CloudforceOneRequestAsset#page}

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.perPage"></a>

```csharp
public double PerPage { get; set; }
```

- *Type:* double

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#per_page CloudforceOneRequestAsset#per_page}

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.requestId"></a>

```csharp
public string RequestId { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#request_id CloudforceOneRequestAsset#request_id}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Asset file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_asset#source CloudforceOneRequestAsset#source}

---



