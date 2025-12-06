# `connectivityDirectoryService` Submodule <a name="`connectivityDirectoryService` Submodule" id="@cdktf/provider-cloudflare.connectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectivityDirectoryService <a name="ConnectivityDirectoryService" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryService(Construct Scope, string Id, ConnectivityDirectoryServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig">ConnectivityDirectoryServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig">ConnectivityDirectoryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort">ResetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort">ResetHttpsPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost"></a>

```csharp
private void PutHost(ConnectivityDirectoryServiceHost Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `ResetHttpPort` <a name="ResetHttpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort"></a>

```csharp
private void ResetHttpPort()
```

##### `ResetHttpsPort` <a name="ResetHttpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort"></a>

```csharp
private void ResetHttpsPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ConnectivityDirectoryService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ConnectivityDirectoryService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ConnectivityDirectoryService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ConnectivityDirectoryService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectivityDirectoryService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput">HostInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host"></a>

```csharp
public ConnectivityDirectoryServiceHostOutputReference Host { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHost HostInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectivityDirectoryServiceConfig <a name="ConnectivityDirectoryServiceConfig" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    ConnectivityDirectoryServiceHost Host,
    string Name,
    string Type,
    double HttpPort = null,
    double HttpsPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type">Type</a></code> | <code>string</code> | Available values: "http". |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host"></a>

```csharp
public ConnectivityDirectoryServiceHost Host { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}

---

##### `HttpPort`<sup>Optional</sup> <a name="HttpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}.

---

##### `HttpsPort`<sup>Optional</sup> <a name="HttpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}.

---

### ConnectivityDirectoryServiceHost <a name="ConnectivityDirectoryServiceHost" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHost {
    string Hostname = null,
    string Ipv4 = null,
    string Ipv6 = null,
    ConnectivityDirectoryServiceHostNetwork Network = null,
    ConnectivityDirectoryServiceHostResolverNetwork ResolverNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4">Ipv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6">Ipv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network">Network</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork">ResolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}. |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}.

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4"></a>

```csharp
public string Ipv4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6"></a>

```csharp
public string Ipv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network"></a>

```csharp
public ConnectivityDirectoryServiceHostNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}.

---

##### `ResolverNetwork`<sup>Optional</sup> <a name="ResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork"></a>

```csharp
public ConnectivityDirectoryServiceHostResolverNetwork ResolverNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}.

---

### ConnectivityDirectoryServiceHostNetwork <a name="ConnectivityDirectoryServiceHostNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHostNetwork {
    string TunnelId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId">TunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

### ConnectivityDirectoryServiceHostResolverNetwork <a name="ConnectivityDirectoryServiceHostResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHostResolverNetwork {
    string TunnelId,
    string[] ResolverIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId">TunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps">ResolverIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}. |

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

##### `ResolverIps`<sup>Optional</sup> <a name="ResolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps"></a>

```csharp
public string[] ResolverIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectivityDirectoryServiceHostNetworkOutputReference <a name="ConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHostNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHostNetwork InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---


### ConnectivityDirectoryServiceHostOutputReference <a name="ConnectivityDirectoryServiceHostOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork">PutResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork">ResetResolverNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork"></a>

```csharp
private void PutNetwork(ConnectivityDirectoryServiceHostNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `PutResolverNetwork` <a name="PutResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork"></a>

```csharp
private void PutResolverNetwork(ConnectivityDirectoryServiceHostResolverNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetResolverNetwork` <a name="ResetResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork"></a>

```csharp
private void ResetResolverNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">ResolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput">NetworkInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput">ResolverNetworkInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4">Ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```csharp
public ConnectivityDirectoryServiceHostNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `ResolverNetwork`<sup>Required</sup> <a name="ResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```csharp
public ConnectivityDirectoryServiceHostResolverNetworkOutputReference ResolverNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input"></a>

```csharp
public string Ipv4Input { get; }
```

- *Type:* string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input"></a>

```csharp
public string Ipv6Input { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHostNetwork NetworkInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `ResolverNetworkInput`<sup>Optional</sup> <a name="ResolverNetworkInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHostResolverNetwork ResolverNetworkInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```csharp
public string Ipv4 { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHost InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---


### ConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="ConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ConnectivityDirectoryServiceHostResolverNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps">ResetResolverIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResolverIps` <a name="ResetResolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps"></a>

```csharp
private void ResetResolverIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput">ResolverIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">ResolverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResolverIpsInput`<sup>Optional</sup> <a name="ResolverIpsInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput"></a>

```csharp
public string[] ResolverIpsInput { get; }
```

- *Type:* string[]

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `ResolverIps`<sup>Required</sup> <a name="ResolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```csharp
public string[] ResolverIps { get; }
```

- *Type:* string[]

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectivityDirectoryServiceHostResolverNetwork InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---



