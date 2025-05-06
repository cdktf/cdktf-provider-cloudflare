# `emailSecurityBlockSender` Submodule <a name="`emailSecurityBlockSender` Submodule" id="@cdktf/provider-cloudflare.emailSecurityBlockSender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityBlockSender <a name="EmailSecurityBlockSender" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailSecurityBlockSender(Construct Scope, string Id, EmailSecurityBlockSenderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig">EmailSecurityBlockSenderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig">EmailSecurityBlockSenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetComments">ResetComments</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComments` <a name="ResetComments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetComments"></a>

```csharp
private void ResetComments()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityBlockSender.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityBlockSender.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityBlockSender.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityBlockSender.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityBlockSender to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityBlockSender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityBlockSender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.commentsInput">CommentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegexInput">IsRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternTypeInput">PatternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegex">IsRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.commentsInput"></a>

```csharp
public string CommentsInput { get; }
```

- *Type:* string

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegexInput"></a>

```csharp
public object IsRegexInput { get; }
```

- *Type:* object

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternTypeInput"></a>

```csharp
public string PatternTypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegex"></a>

```csharp
public object IsRegex { get; }
```

- *Type:* object

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityBlockSenderConfig <a name="EmailSecurityBlockSenderConfig" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailSecurityBlockSenderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object IsRegex,
    string Pattern,
    string PatternType,
    string Comments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.isRegex">IsRegex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#is_regex EmailSecurityBlockSender#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#pattern EmailSecurityBlockSender#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.patternType">PatternType</a></code> | <code>string</code> | Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.comments">Comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#comments EmailSecurityBlockSender#comments}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#account_id EmailSecurityBlockSender#account_id}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.isRegex"></a>

```csharp
public object IsRegex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#is_regex EmailSecurityBlockSender#is_regex}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#pattern EmailSecurityBlockSender#pattern}.

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.patternType"></a>

```csharp
public string PatternType { get; set; }
```

- *Type:* string

Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#pattern_type EmailSecurityBlockSender#pattern_type}

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.comments"></a>

```csharp
public string Comments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/email_security_block_sender#comments EmailSecurityBlockSender#comments}.

---



