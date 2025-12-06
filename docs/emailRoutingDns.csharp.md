# `emailRoutingDns` Submodule <a name="`emailRoutingDns` Submodule" id="@cdktf/provider-cloudflare.emailRoutingDns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailRoutingDns <a name="EmailRoutingDns" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/email_routing_dns cloudflare_email_routing_dns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDns(Construct Scope, string Id, EmailRoutingDnsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig">EmailRoutingDnsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig">EmailRoutingDnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailRoutingDns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailRoutingDns.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailRoutingDns.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailRoutingDns.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailRoutingDns.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailRoutingDns resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailRoutingDns to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailRoutingDns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/email_routing_dns#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailRoutingDns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList">EmailRoutingDnsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList">EmailRoutingDnsMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference">EmailRoutingDnsResultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.resultInfo">ResultInfo</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference">EmailRoutingDnsResultInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.skipWizard">SkipWizard</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.success">Success</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.errors"></a>

```csharp
public EmailRoutingDnsErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList">EmailRoutingDnsErrorsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.messages"></a>

```csharp
public EmailRoutingDnsMessagesList Messages { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList">EmailRoutingDnsMessagesList</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.result"></a>

```csharp
public EmailRoutingDnsResultOutputReference Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference">EmailRoutingDnsResultOutputReference</a>

---

##### `ResultInfo`<sup>Required</sup> <a name="ResultInfo" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.resultInfo"></a>

```csharp
public EmailRoutingDnsResultInfoOutputReference ResultInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference">EmailRoutingDnsResultInfoOutputReference</a>

---

##### `SkipWizard`<sup>Required</sup> <a name="SkipWizard" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.skipWizard"></a>

```csharp
public IResolvable SkipWizard { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.success"></a>

```csharp
public IResolvable Success { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDns.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailRoutingDnsConfig <a name="EmailRoutingDnsConfig" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.name">Name</a></code> | <code>string</code> | Domain of your zone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/email_routing_dns#zone_id EmailRoutingDns#zone_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Domain of your zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/email_routing_dns#name EmailRoutingDns#name}

---

### EmailRoutingDnsErrors <a name="EmailRoutingDnsErrors" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsErrors {

};
```


### EmailRoutingDnsErrorsSource <a name="EmailRoutingDnsErrorsSource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsErrorsSource {

};
```


### EmailRoutingDnsMessages <a name="EmailRoutingDnsMessages" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsMessages {

};
```


### EmailRoutingDnsMessagesSource <a name="EmailRoutingDnsMessagesSource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsMessagesSource {

};
```


### EmailRoutingDnsResult <a name="EmailRoutingDnsResult" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResult {

};
```


### EmailRoutingDnsResultErrors <a name="EmailRoutingDnsResultErrors" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultErrors {

};
```


### EmailRoutingDnsResultErrorsMissing <a name="EmailRoutingDnsResultErrorsMissing" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultErrorsMissing {

};
```


### EmailRoutingDnsResultInfo <a name="EmailRoutingDnsResultInfo" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultInfo {

};
```


### EmailRoutingDnsResultRecord <a name="EmailRoutingDnsResultRecord" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultRecord {

};
```


## Classes <a name="Classes" id="Classes"></a>

### EmailRoutingDnsErrorsList <a name="EmailRoutingDnsErrorsList" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.get"></a>

```csharp
private EmailRoutingDnsErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EmailRoutingDnsErrorsOutputReference <a name="EmailRoutingDnsErrorsOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.documentationUrl">DocumentationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference">EmailRoutingDnsErrorsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrors">EmailRoutingDnsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.documentationUrl"></a>

```csharp
public string DocumentationUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.source"></a>

```csharp
public EmailRoutingDnsErrorsSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference">EmailRoutingDnsErrorsSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrors">EmailRoutingDnsErrors</a>

---


### EmailRoutingDnsErrorsSourceOutputReference <a name="EmailRoutingDnsErrorsSourceOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsErrorsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.pointer">Pointer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSource">EmailRoutingDnsErrorsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pointer`<sup>Required</sup> <a name="Pointer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.pointer"></a>

```csharp
public string Pointer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSourceOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsErrorsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsErrorsSource">EmailRoutingDnsErrorsSource</a>

---


### EmailRoutingDnsMessagesList <a name="EmailRoutingDnsMessagesList" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsMessagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.get"></a>

```csharp
private EmailRoutingDnsMessagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EmailRoutingDnsMessagesOutputReference <a name="EmailRoutingDnsMessagesOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsMessagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.documentationUrl">DocumentationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference">EmailRoutingDnsMessagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessages">EmailRoutingDnsMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.documentationUrl"></a>

```csharp
public string DocumentationUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.source"></a>

```csharp
public EmailRoutingDnsMessagesSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference">EmailRoutingDnsMessagesSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsMessages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessages">EmailRoutingDnsMessages</a>

---


### EmailRoutingDnsMessagesSourceOutputReference <a name="EmailRoutingDnsMessagesSourceOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsMessagesSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.pointer">Pointer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSource">EmailRoutingDnsMessagesSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pointer`<sup>Required</sup> <a name="Pointer" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.pointer"></a>

```csharp
public string Pointer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSourceOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsMessagesSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsMessagesSource">EmailRoutingDnsMessagesSource</a>

---


### EmailRoutingDnsResultErrorsList <a name="EmailRoutingDnsResultErrorsList" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.get"></a>

```csharp
private EmailRoutingDnsResultErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EmailRoutingDnsResultErrorsMissingOutputReference <a name="EmailRoutingDnsResultErrorsMissingOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultErrorsMissingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissing">EmailRoutingDnsResultErrorsMissing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsResultErrorsMissing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissing">EmailRoutingDnsResultErrorsMissing</a>

---


### EmailRoutingDnsResultErrorsOutputReference <a name="EmailRoutingDnsResultErrorsOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.missing">Missing</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference">EmailRoutingDnsResultErrorsMissingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrors">EmailRoutingDnsResultErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Missing`<sup>Required</sup> <a name="Missing" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.missing"></a>

```csharp
public EmailRoutingDnsResultErrorsMissingOutputReference Missing { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsMissingOutputReference">EmailRoutingDnsResultErrorsMissingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsResultErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrors">EmailRoutingDnsResultErrors</a>

---


### EmailRoutingDnsResultInfoOutputReference <a name="EmailRoutingDnsResultInfoOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.emailRoutingDnsCount">EmailRoutingDnsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.page">Page</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.totalCount">TotalCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfo">EmailRoutingDnsResultInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailRoutingDnsCount`<sup>Required</sup> <a name="EmailRoutingDnsCount" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.emailRoutingDnsCount"></a>

```csharp
public double EmailRoutingDnsCount { get; }
```

- *Type:* double

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.page"></a>

```csharp
public double Page { get; }
```

- *Type:* double

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `TotalCount`<sup>Required</sup> <a name="TotalCount" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.totalCount"></a>

```csharp
public double TotalCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfoOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsResultInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultInfo">EmailRoutingDnsResultInfo</a>

---


### EmailRoutingDnsResultOutputReference <a name="EmailRoutingDnsResultOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList">EmailRoutingDnsResultErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.record">Record</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList">EmailRoutingDnsResultRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResult">EmailRoutingDnsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.errors"></a>

```csharp
public EmailRoutingDnsResultErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultErrorsList">EmailRoutingDnsResultErrorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Record`<sup>Required</sup> <a name="Record" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.record"></a>

```csharp
public EmailRoutingDnsResultRecordList Record { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList">EmailRoutingDnsResultRecordList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResult">EmailRoutingDnsResult</a>

---


### EmailRoutingDnsResultRecordList <a name="EmailRoutingDnsResultRecordList" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultRecordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.get"></a>

```csharp
private EmailRoutingDnsResultRecordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EmailRoutingDnsResultRecordOutputReference <a name="EmailRoutingDnsResultRecordOutputReference" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailRoutingDnsResultRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecord">EmailRoutingDnsResultRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecordOutputReference.property.internalValue"></a>

```csharp
public EmailRoutingDnsResultRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingDns.EmailRoutingDnsResultRecord">EmailRoutingDnsResultRecord</a>

---



