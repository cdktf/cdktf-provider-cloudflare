# `list` Submodule <a name="`list` Submodule" id="@cdktf/provider-cloudflare.list"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### List <a name="List" id="@cdktf/provider-cloudflare.list.List"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list cloudflare_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new List(Construct Scope, string Id, ListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListConfig">ListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListConfig">ListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.list.List.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.List.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.list.List.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.list.List.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.list.List.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.list.List.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.list.List.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.list.List.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.list.List.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.list.List.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.list.List.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.list.List.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.list.List.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.List.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.List.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.List.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.List.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.list.List.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.list.List.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.List.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.List.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.List.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.list.List.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.list.List.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.list.List.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.list.List.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.list.List.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutItems` <a name="PutItems" id="@cdktf/provider-cloudflare.list.List.putItems"></a>

```csharp
private void PutItems(IResolvable|ListItems[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.list.List.putItems.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.list.List.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-cloudflare.list.List.resetItems"></a>

```csharp
private void ResetItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.list.List.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

List.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.list.List.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.list.List.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

List.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.list.List.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.list.List.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

List.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.list.List.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

List.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the List to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing List that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the List to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.items">Items</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList">ListItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.numItems">NumItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.numReferencingFilters">NumReferencingFilters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.itemsInput">ItemsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.list.List.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.list.List.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.list.List.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.list.List.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.list.List.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.list.List.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.list.List.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.list.List.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.list.List.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.list.List.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.list.List.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.List.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.list.List.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.list.List.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-cloudflare.list.List.property.items"></a>

```csharp
public ListItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsList">ListItemsList</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.list.List.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `NumItems`<sup>Required</sup> <a name="NumItems" id="@cdktf/provider-cloudflare.list.List.property.numItems"></a>

```csharp
public double NumItems { get; }
```

- *Type:* double

---

##### `NumReferencingFilters`<sup>Required</sup> <a name="NumReferencingFilters" id="@cdktf/provider-cloudflare.list.List.property.numReferencingFilters"></a>

```csharp
public double NumReferencingFilters { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.list.List.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.list.List.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-cloudflare.list.List.property.itemsInput"></a>

```csharp
public IResolvable|ListItems[] ItemsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.list.List.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.list.List.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.list.List.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.list.List.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.list.List.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.list.List.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.list.List.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ListConfig <a name="ListConfig" id="@cdktf/provider-cloudflare.list.ListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Kind,
    string Name,
    string Description = null,
    IResolvable|ListItems[] Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID for this resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.kind">Kind</a></code> | <code>string</code> | The type of the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.name">Name</a></code> | <code>string</code> | An informative name for the list. Use this name in filter and rule expressions. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.description">Description</a></code> | <code>string</code> | An informative summary of the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.items">Items</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]</code> | The items in the list. If set, this overwrites all items in the list. Do not use with `cloudflare_list_item`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.list.ListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.list.ListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.list.ListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.list.ListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.list.ListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.ListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.list.ListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.list.ListConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#account_id List#account_id}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.list.ListConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The type of the list.

Each type supports specific list items (IP addresses, ASNs, hostnames or redirects).
Available values: "ip", "redirect", "hostname", "asn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#kind List#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.list.ListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

An informative name for the list. Use this name in filter and rule expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#name List#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.list.ListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An informative summary of the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#description List#description}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-cloudflare.list.ListConfig.property.items"></a>

```csharp
public IResolvable|ListItems[] Items { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]

The items in the list. If set, this overwrites all items in the list. Do not use with `cloudflare_list_item`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#items List#items}

---

### ListItems <a name="ListItems" id="@cdktf/provider-cloudflare.list.ListItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItems {
    double Asn = null,
    string Comment = null,
    ListItemsHostname Hostname = null,
    string Ip = null,
    ListItemsRedirect Redirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.asn">Asn</a></code> | <code>double</code> | A non-negative 32 bit integer. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.comment">Comment</a></code> | <code>string</code> | An informative summary of the list item. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a></code> | Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-). |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.ip">Ip</a></code> | <code>string</code> | An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a></code> | The definition of the redirect. |

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-cloudflare.list.ListItems.property.asn"></a>

```csharp
public double Asn { get; set; }
```

- *Type:* double

A non-negative 32 bit integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#asn List#asn}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.list.ListItems.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

An informative summary of the list item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#comment List#comment}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.list.ListItems.property.hostname"></a>

```csharp
public ListItemsHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#hostname List#hostname}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.list.ListItems.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#ip List#ip}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.list.ListItems.property.redirect"></a>

```csharp
public ListItemsRedirect Redirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

The definition of the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#redirect List#redirect}

---

### ListItemsHostname <a name="ListItemsHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItemsHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsHostname {
    string UrlHostname,
    bool|IResolvable ExcludeExactHostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname.property.urlHostname">UrlHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#url_hostname List#url_hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname.property.excludeExactHostname">ExcludeExactHostname</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked. |

---

##### `UrlHostname`<sup>Required</sup> <a name="UrlHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname.property.urlHostname"></a>

```csharp
public string UrlHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#url_hostname List#url_hostname}.

---

##### `ExcludeExactHostname`<sup>Optional</sup> <a name="ExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname.property.excludeExactHostname"></a>

```csharp
public bool|IResolvable ExcludeExactHostname { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#exclude_exact_hostname List#exclude_exact_hostname}

---

### ListItemsRedirect <a name="ListItemsRedirect" id="@cdktf/provider-cloudflare.list.ListItemsRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsRedirect {
    string SourceUrl,
    string TargetUrl,
    bool|IResolvable IncludeSubdomains = null,
    bool|IResolvable PreservePathSuffix = null,
    bool|IResolvable PreserveQueryString = null,
    double StatusCode = null,
    bool|IResolvable SubpathMatching = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#source_url List#source_url}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.targetUrl">TargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#target_url List#target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.includeSubdomains">IncludeSubdomains</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#include_subdomains List#include_subdomains}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preserveQueryString">PreserveQueryString</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#preserve_query_string List#preserve_query_string}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.statusCode">StatusCode</a></code> | <code>double</code> | Available values: 301, 302, 307, 308. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.subpathMatching">SubpathMatching</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#subpath_matching List#subpath_matching}. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#source_url List#source_url}.

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.targetUrl"></a>

```csharp
public string TargetUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#target_url List#target_url}.

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.includeSubdomains"></a>

```csharp
public bool|IResolvable IncludeSubdomains { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#include_subdomains List#include_subdomains}.

---

##### `PreservePathSuffix`<sup>Optional</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preservePathSuffix"></a>

```csharp
public bool|IResolvable PreservePathSuffix { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}.

---

##### `PreserveQueryString`<sup>Optional</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preserveQueryString"></a>

```csharp
public bool|IResolvable PreserveQueryString { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#preserve_query_string List#preserve_query_string}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

Available values: 301, 302, 307, 308.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#status_code List#status_code}

---

##### `SubpathMatching`<sup>Optional</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.subpathMatching"></a>

```csharp
public bool|IResolvable SubpathMatching { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/list#subpath_matching List#subpath_matching}.

---

## Classes <a name="Classes" id="Classes"></a>

### ListItemsHostnameOutputReference <a name="ListItemsHostnameOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resetExcludeExactHostname">ResetExcludeExactHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeExactHostname` <a name="ResetExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resetExcludeExactHostname"></a>

```csharp
private void ResetExcludeExactHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostnameInput">ExcludeExactHostnameInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostnameInput">UrlHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostname">ExcludeExactHostname</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostname">UrlHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeExactHostnameInput`<sup>Optional</sup> <a name="ExcludeExactHostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostnameInput"></a>

```csharp
public bool|IResolvable ExcludeExactHostnameInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlHostnameInput`<sup>Optional</sup> <a name="UrlHostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostnameInput"></a>

```csharp
public string UrlHostnameInput { get; }
```

- *Type:* string

---

##### `ExcludeExactHostname`<sup>Required</sup> <a name="ExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostname"></a>

```csharp
public bool|IResolvable ExcludeExactHostname { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlHostname`<sup>Required</sup> <a name="UrlHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostname"></a>

```csharp
public string UrlHostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ListItemsHostname InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

---


### ListItemsList <a name="ListItemsList" id="@cdktf/provider-cloudflare.list.ListItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.list.ListItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.list.ListItemsList.get"></a>

```csharp
private ListItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.list.ListItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsList.property.internalValue"></a>

```csharp
public IResolvable|ListItems[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>[]

---


### ListItemsOutputReference <a name="ListItemsOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname"></a>

```csharp
private void PutHostname(ListItemsHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect"></a>

```csharp
private void PutRedirect(ListItemsRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetAsn"></a>

```csharp
private void ResetAsn()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetRedirect"></a>

```csharp
private void ResetRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference">ListItemsHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference">ListItemsRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asnInput">AsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirectInput">RedirectInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostname"></a>

```csharp
public ListItemsHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference">ListItemsHostnameOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirect"></a>

```csharp
public ListItemsRedirectOutputReference Redirect { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference">ListItemsRedirectOutputReference</a>

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asnInput"></a>

```csharp
public double AsnInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostnameInput"></a>

```csharp
public IResolvable|ListItemsHostname HostnameInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirectInput"></a>

```csharp
public IResolvable|ListItemsRedirect RedirectInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ListItems InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItems">ListItems</a>

---


### ListItemsRedirectOutputReference <a name="ListItemsRedirectOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ListItemsRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreservePathSuffix">ResetPreservePathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreserveQueryString">ResetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetSubpathMatching">ResetSubpathMatching</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetIncludeSubdomains"></a>

```csharp
private void ResetIncludeSubdomains()
```

##### `ResetPreservePathSuffix` <a name="ResetPreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreservePathSuffix"></a>

```csharp
private void ResetPreservePathSuffix()
```

##### `ResetPreserveQueryString` <a name="ResetPreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreserveQueryString"></a>

```csharp
private void ResetPreserveQueryString()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```

##### `ResetSubpathMatching` <a name="ResetSubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetSubpathMatching"></a>

```csharp
private void ResetSubpathMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffixInput">PreservePathSuffixInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryStringInput">PreserveQueryStringInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatchingInput">SubpathMatchingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatching">SubpathMatching</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomainsInput"></a>

```csharp
public bool|IResolvable IncludeSubdomainsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreservePathSuffixInput`<sup>Optional</sup> <a name="PreservePathSuffixInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffixInput"></a>

```csharp
public bool|IResolvable PreservePathSuffixInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreserveQueryStringInput`<sup>Optional</sup> <a name="PreserveQueryStringInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryStringInput"></a>

```csharp
public bool|IResolvable PreserveQueryStringInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `SubpathMatchingInput`<sup>Optional</sup> <a name="SubpathMatchingInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatchingInput"></a>

```csharp
public bool|IResolvable SubpathMatchingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrlInput"></a>

```csharp
public string TargetUrlInput { get; }
```

- *Type:* string

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomains"></a>

```csharp
public bool|IResolvable IncludeSubdomains { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreservePathSuffix`<sup>Required</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffix"></a>

```csharp
public bool|IResolvable PreservePathSuffix { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryString"></a>

```csharp
public bool|IResolvable PreserveQueryString { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `SubpathMatching`<sup>Required</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatching"></a>

```csharp
public bool|IResolvable SubpathMatching { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ListItemsRedirect InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

---



