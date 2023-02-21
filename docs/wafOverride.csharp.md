# `wafOverride` Submodule <a name="`wafOverride` Submodule" id="@cdktf/provider-cloudflare.wafOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafOverride <a name="WafOverride" id="@cdktf/provider-cloudflare.wafOverride.WafOverride"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override cloudflare_waf_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WafOverride(Construct Scope, string Id, WafOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig">WafOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig">WafOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction">ResetRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRewriteAction` <a name="ResetRewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRewriteAction"></a>

```csharp
private void ResetRewriteAction()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.resetRules"></a>

```csharp
private void ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WafOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WafOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WafOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId">OverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput">GroupsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput">PausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput">RewriteActionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput">RulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput">UrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups">Groups</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused">Paused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction">RewriteAction</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules">Rules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls">Urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OverrideId`<sup>Required</sup> <a name="OverrideId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.overrideId"></a>

```csharp
public string OverrideId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groupsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GroupsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.pausedInput"></a>

```csharp
public object PausedInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RewriteActionInput`<sup>Optional</sup> <a name="RewriteActionInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteActionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RewriteActionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urlsInput"></a>

```csharp
public string[] UrlsInput { get; }
```

- *Type:* string[]

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.groups"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Groups { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.paused"></a>

```csharp
public object Paused { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RewriteAction`<sup>Required</sup> <a name="RewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rewriteAction"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RewriteAction { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.rules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Rules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.urls"></a>

```csharp
public string[] Urls { get; }
```

- *Type:* string[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.wafOverride.WafOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafOverrideConfig <a name="WafOverrideConfig" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WafOverrideConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Urls,
    string ZoneId,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Groups = null,
    string Id = null,
    object Paused = null,
    double Priority = null,
    System.Collections.Generic.IDictionary<string, string> RewriteAction = null,
    System.Collections.Generic.IDictionary<string, string> Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls">Urls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups">Groups</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused">Paused</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction">RewriteAction</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}. |
| <code><a href="#@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules">Rules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.urls"></a>

```csharp
public string[] Urls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#urls WafOverride#urls}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#zone_id WafOverride#zone_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#description WafOverride#description}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.groups"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Groups { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#groups WafOverride#groups}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#id WafOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.paused"></a>

```csharp
public object Paused { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#paused WafOverride#paused}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#priority WafOverride#priority}.

---

##### `RewriteAction`<sup>Optional</sup> <a name="RewriteAction" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rewriteAction"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RewriteAction { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rewrite_action WafOverride#rewrite_action}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.wafOverride.WafOverrideConfig.property.rules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Rules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_override#rules WafOverride#rules}.

---



