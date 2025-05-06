# `userAgentBlockingRule` Submodule <a name="`userAgentBlockingRule` Submodule" id="@cdktf/provider-cloudflare.userAgentBlockingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserAgentBlockingRule <a name="UserAgentBlockingRule" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new UserAgentBlockingRule(Construct Scope, string Id, UserAgentBlockingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig">UserAgentBlockingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig">UserAgentBlockingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetUaRuleId">ResetUaRuleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration"></a>

```csharp
private void PutConfiguration(UserAgentBlockingRuleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

---

##### `ResetUaRuleId` <a name="ResetUaRuleId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetUaRuleId"></a>

```csharp
private void ResetUaRuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UserAgentBlockingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

UserAgentBlockingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

UserAgentBlockingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

UserAgentBlockingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

UserAgentBlockingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a UserAgentBlockingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserAgentBlockingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserAgentBlockingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the UserAgentBlockingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference">UserAgentBlockingRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configurationInput">ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.uaRuleIdInput">UaRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.uaRuleId">UaRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configuration"></a>

```csharp
public UserAgentBlockingRuleConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference">UserAgentBlockingRuleConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configurationInput"></a>

```csharp
public object ConfigurationInput { get; }
```

- *Type:* object

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `UaRuleIdInput`<sup>Optional</sup> <a name="UaRuleIdInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.uaRuleIdInput"></a>

```csharp
public string UaRuleIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `UaRuleId`<sup>Required</sup> <a name="UaRuleId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.uaRuleId"></a>

```csharp
public string UaRuleId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserAgentBlockingRuleConfig <a name="UserAgentBlockingRuleConfig" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new UserAgentBlockingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    UserAgentBlockingRuleConfiguration Configuration,
    string Mode,
    string ZoneId,
    string UaRuleId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a></code> | The rule configuration. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.mode">Mode</a></code> | <code>string</code> | The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge". |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.uaRuleId">UaRuleId</a></code> | <code>string</code> | The unique identifier of the User Agent Blocking rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.configuration"></a>

```csharp
public UserAgentBlockingRuleConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

The rule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#configuration UserAgentBlockingRule#configuration}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#mode UserAgentBlockingRule#mode}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#zone_id UserAgentBlockingRule#zone_id}

---

##### `UaRuleId`<sup>Optional</sup> <a name="UaRuleId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.uaRuleId"></a>

```csharp
public string UaRuleId { get; set; }
```

- *Type:* string

The unique identifier of the User Agent Blocking rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#ua_rule_id UserAgentBlockingRule#ua_rule_id}

---

### UserAgentBlockingRuleConfiguration <a name="UserAgentBlockingRuleConfiguration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new UserAgentBlockingRuleConfiguration {
    string Target = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.target">Target</a></code> | <code>string</code> | The configuration target. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.value">Value</a></code> | <code>string</code> | The IP address to match. This address will be compared to the IP address of incoming requests. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The configuration target.

You must set the target to `ip` when specifying an IP address in the rule.
Available values: "ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#target UserAgentBlockingRule#target}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The IP address to match. This address will be compared to the IP address of incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/user_agent_blocking_rule#value UserAgentBlockingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAgentBlockingRuleConfigurationOutputReference <a name="UserAgentBlockingRuleConfigurationOutputReference" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new UserAgentBlockingRuleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



