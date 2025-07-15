# `cloudforceOneRequestPriority` Submodule <a name="`cloudforceOneRequestPriority` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequestPriority <a name="CloudforceOneRequestPriority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudforceOneRequestPriority(Construct Scope, string Id, CloudforceOneRequestPriorityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig">CloudforceOneRequestPriorityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig">CloudforceOneRequestPriorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestPriority.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestPriority.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestPriority.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudforceOneRequestPriority.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudforceOneRequestPriority to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudforceOneRequestPriority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequestPriority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.completed">Completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.messageTokens">MessageTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.readableId">ReadableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirementInput">RequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlpInput">TlpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirement">Requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlp">Tlp</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Completed`<sup>Required</sup> <a name="Completed" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.completed"></a>

```csharp
public string Completed { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MessageTokens`<sup>Required</sup> <a name="MessageTokens" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.messageTokens"></a>

```csharp
public double MessageTokens { get; }
```

- *Type:* double

---

##### `ReadableId`<sup>Required</sup> <a name="ReadableId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.readableId"></a>

```csharp
public string ReadableId { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirementInput"></a>

```csharp
public string RequirementInput { get; }
```

- *Type:* string

---

##### `TlpInput`<sup>Optional</sup> <a name="TlpInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlpInput"></a>

```csharp
public string TlpInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirement"></a>

```csharp
public string Requirement { get; }
```

- *Type:* string

---

##### `Tlp`<sup>Required</sup> <a name="Tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlp"></a>

```csharp
public string Tlp { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestPriorityConfig <a name="CloudforceOneRequestPriorityConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudforceOneRequestPriorityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string[] Labels,
    double Priority,
    string Requirement,
    string Tlp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.labels">Labels</a></code> | <code>string[]</code> | List of labels. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.priority">Priority</a></code> | <code>double</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.requirement">Requirement</a></code> | <code>string</code> | Requirement. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.tlp">Tlp</a></code> | <code>string</code> | The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#account_id CloudforceOneRequestPriority#account_id}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

List of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#labels CloudforceOneRequestPriority#labels}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#priority CloudforceOneRequestPriority#priority}

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.requirement"></a>

```csharp
public string Requirement { get; set; }
```

- *Type:* string

Requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#requirement CloudforceOneRequestPriority#requirement}

---

##### `Tlp`<sup>Required</sup> <a name="Tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.tlp"></a>

```csharp
public string Tlp { get; set; }
```

- *Type:* string

The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_priority#tlp CloudforceOneRequestPriority#tlp}

---



