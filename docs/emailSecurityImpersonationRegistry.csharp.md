# `emailSecurityImpersonationRegistry` Submodule <a name="`emailSecurityImpersonationRegistry` Submodule" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityImpersonationRegistry <a name="EmailSecurityImpersonationRegistry" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailSecurityImpersonationRegistry(Construct Scope, string Id, EmailSecurityImpersonationRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityImpersonationRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityImpersonationRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityImpersonationRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

EmailSecurityImpersonationRegistry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityImpersonationRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId">DirectoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId">DirectoryNodeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId">ExternalDirectoryNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance">Provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput">IsEmailRegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex">IsEmailRegex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId"></a>

```csharp
public double DirectoryId { get; }
```

- *Type:* double

---

##### `DirectoryNodeId`<sup>Required</sup> <a name="DirectoryNodeId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId"></a>

```csharp
public double DirectoryNodeId { get; }
```

- *Type:* double

---

##### `ExternalDirectoryNodeId`<sup>Required</sup> <a name="ExternalDirectoryNodeId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId"></a>

```csharp
public string ExternalDirectoryNodeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Provenance`<sup>Required</sup> <a name="Provenance" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance"></a>

```csharp
public string Provenance { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IsEmailRegexInput`<sup>Optional</sup> <a name="IsEmailRegexInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput"></a>

```csharp
public object IsEmailRegexInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `IsEmailRegex`<sup>Required</sup> <a name="IsEmailRegex" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex"></a>

```csharp
public object IsEmailRegex { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityImpersonationRegistryConfig <a name="EmailSecurityImpersonationRegistryConfig" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new EmailSecurityImpersonationRegistryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Email,
    object IsEmailRegex,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex">IsEmailRegex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#account_id EmailSecurityImpersonationRegistry#account_id}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}.

---

##### `IsEmailRegex`<sup>Required</sup> <a name="IsEmailRegex" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex"></a>

```csharp
public object IsEmailRegex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}.

---



