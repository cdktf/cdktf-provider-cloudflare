# `cloudflare_page_rule`

Refer to the Terraform Registory for docs: [`cloudflare_page_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule).

# `pageRule` Submodule <a name="`pageRule` Submodule" id="@cdktf/provider-cloudflare.pageRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PageRule <a name="PageRule" id="@cdktf/provider-cloudflare.pageRule.PageRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule cloudflare_page_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRule(scope: Construct, id: string, config: PageRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig">PageRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig">PageRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActions` <a name="putActions" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions"></a>

```typescript
public putActions(value: PageRuleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

pageRule.PageRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

pageRule.PageRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

pageRule.PageRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actions"></a>

```typescript
public readonly actions: PageRuleActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: PageRuleActions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PageRuleActions <a name="PageRuleActions" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActions: pageRule.PageRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps">alwaysUseHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl">browserCacheTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck">browserCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#browser_check PageRule#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie">bypassCacheOnCookie</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields">cacheKeyFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | cache_key_fields block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel">cacheLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_level PageRule#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie">cacheOnCookie</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus">cacheTtlByStatus</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]</code> | cache_ttl_by_status block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps">disableApps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance">disablePerformance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun">disableRailgun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity">disableSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz">disableZaraz</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl">edgeCacheTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation">emailObfuscation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl">explicitCacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl">forwardingUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | forwarding_url block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride">hostHeaderOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation">ipGeolocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify">minify</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]</code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage">mirage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#mirage PageRule#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru">originErrorPagePassThru</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish">polish</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#polish PageRule#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride">resolveOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag">respectStrongEtag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering">responseBuffering</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader">rocketLoader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel">securityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#security_level PageRule#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude">serverSideExclude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache">sortQueryStringForCache</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl">ssl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ssl PageRule#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader">trueClientIpHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf">waf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#waf PageRule#waf}. |

---

##### `alwaysUseHttps`<sup>Optional</sup> <a name="alwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps"></a>

```typescript
public readonly alwaysUseHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}

---

##### `automaticHttpsRewrites`<sup>Optional</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}.

---

##### `browserCacheTtl`<sup>Optional</sup> <a name="browserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl"></a>

```typescript
public readonly browserCacheTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}.

---

##### `browserCheck`<sup>Optional</sup> <a name="browserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck"></a>

```typescript
public readonly browserCheck: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#browser_check PageRule#browser_check}.

---

##### `bypassCacheOnCookie`<sup>Optional</sup> <a name="bypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie"></a>

```typescript
public readonly bypassCacheOnCookie: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}.

---

##### `cacheByDeviceType`<sup>Optional</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType"></a>

```typescript
public readonly cacheByDeviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}.

---

##### `cacheDeceptionArmor`<sup>Optional</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor"></a>

```typescript
public readonly cacheDeceptionArmor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}.

---

##### `cacheKeyFields`<sup>Optional</sup> <a name="cacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields"></a>

```typescript
public readonly cacheKeyFields: PageRuleActionsCacheKeyFields;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

cache_key_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}

---

##### `cacheLevel`<sup>Optional</sup> <a name="cacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel"></a>

```typescript
public readonly cacheLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_level PageRule#cache_level}.

---

##### `cacheOnCookie`<sup>Optional</sup> <a name="cacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie"></a>

```typescript
public readonly cacheOnCookie: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}.

---

##### `cacheTtlByStatus`<sup>Optional</sup> <a name="cacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus"></a>

```typescript
public readonly cacheTtlByStatus: IResolvable | PageRuleActionsCacheTtlByStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]

cache_ttl_by_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}

---

##### `disableApps`<sup>Optional</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps"></a>

```typescript
public readonly disableApps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}

---

##### `disablePerformance`<sup>Optional</sup> <a name="disablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance"></a>

```typescript
public readonly disablePerformance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}

---

##### `disableRailgun`<sup>Optional</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun"></a>

```typescript
public readonly disableRailgun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#disable_railgun PageRule#disable_railgun}

---

##### `disableSecurity`<sup>Optional</sup> <a name="disableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity"></a>

```typescript
public readonly disableSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#disable_security PageRule#disable_security}

---

##### `disableZaraz`<sup>Optional</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz"></a>

```typescript
public readonly disableZaraz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}

---

##### `edgeCacheTtl`<sup>Optional</sup> <a name="edgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl"></a>

```typescript
public readonly edgeCacheTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}.

---

##### `emailObfuscation`<sup>Optional</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}.

---

##### `explicitCacheControl`<sup>Optional</sup> <a name="explicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl"></a>

```typescript
public readonly explicitCacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}.

---

##### `forwardingUrl`<sup>Optional</sup> <a name="forwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl"></a>

```typescript
public readonly forwardingUrl: PageRuleActionsForwardingUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

forwarding_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}

---

##### `hostHeaderOverride`<sup>Optional</sup> <a name="hostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride"></a>

```typescript
public readonly hostHeaderOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}.

---

##### `ipGeolocation`<sup>Optional</sup> <a name="ipGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation"></a>

```typescript
public readonly ipGeolocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}.

---

##### `minify`<sup>Optional</sup> <a name="minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify"></a>

```typescript
public readonly minify: IResolvable | PageRuleActionsMinify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#minify PageRule#minify}

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage"></a>

```typescript
public readonly mirage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#mirage PageRule#mirage}.

---

##### `opportunisticEncryption`<sup>Optional</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}.

---

##### `originErrorPagePassThru`<sup>Optional</sup> <a name="originErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru"></a>

```typescript
public readonly originErrorPagePassThru: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}.

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#polish PageRule#polish}.

---

##### `resolveOverride`<sup>Optional</sup> <a name="resolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride"></a>

```typescript
public readonly resolveOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}.

---

##### `respectStrongEtag`<sup>Optional</sup> <a name="respectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag"></a>

```typescript
public readonly respectStrongEtag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}.

---

##### `responseBuffering`<sup>Optional</sup> <a name="responseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering"></a>

```typescript
public readonly responseBuffering: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}.

---

##### `rocketLoader`<sup>Optional</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}.

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#security_level PageRule#security_level}.

---

##### `serverSideExclude`<sup>Optional</sup> <a name="serverSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude"></a>

```typescript
public readonly serverSideExclude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}.

---

##### `sortQueryStringForCache`<sup>Optional</sup> <a name="sortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache"></a>

```typescript
public readonly sortQueryStringForCache: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ssl PageRule#ssl}.

---

##### `trueClientIpHeader`<sup>Optional</sup> <a name="trueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader"></a>

```typescript
public readonly trueClientIpHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}.

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#waf PageRule#waf}.

---

### PageRuleActionsCacheKeyFields <a name="PageRuleActionsCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFields: pageRule.PageRuleActionsCacheKeyFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | header block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host"></a>

```typescript
public readonly host: PageRuleActionsCacheKeyFieldsHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#host PageRule#host}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString"></a>

```typescript
public readonly queryString: PageRuleActionsCacheKeyFieldsQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#query_string PageRule#query_string}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user"></a>

```typescript
public readonly user: PageRuleActionsCacheKeyFieldsUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#user PageRule#user}

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie"></a>

```typescript
public readonly cookie: PageRuleActionsCacheKeyFieldsCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#cookie PageRule#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header"></a>

```typescript
public readonly header: PageRuleActionsCacheKeyFieldsHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#header PageRule#header}

---

### PageRuleActionsCacheKeyFieldsCookie <a name="PageRuleActionsCacheKeyFieldsCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFieldsCookie: pageRule.PageRuleActionsCacheKeyFieldsCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include">include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHeader <a name="PageRuleActionsCacheKeyFieldsHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFieldsHeader: pageRule.PageRuleActionsCacheKeyFieldsHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude">exclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include">include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `checkPresence`<sup>Optional</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHost <a name="PageRuleActionsCacheKeyFieldsHost" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFieldsHost: pageRule.PageRuleActionsCacheKeyFieldsHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved">resolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to `false`. |

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved"></a>

```typescript
public readonly resolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#resolved PageRule#resolved}

---

### PageRuleActionsCacheKeyFieldsQueryString <a name="PageRuleActionsCacheKeyFieldsQueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFieldsQueryString: pageRule.PageRuleActionsCacheKeyFieldsQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude">exclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ignore PageRule#ignore}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include">include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ignore PageRule#ignore}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsUser <a name="PageRuleActionsCacheKeyFieldsUser" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheKeyFieldsUser: pageRule.PageRuleActionsCacheKeyFieldsUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType">deviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#device_type PageRule#device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo">geo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#geo PageRule#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang">lang</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#lang PageRule#lang}. |

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType"></a>

```typescript
public readonly deviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#device_type PageRule#device_type}.

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo"></a>

```typescript
public readonly geo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#geo PageRule#geo}.

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang"></a>

```typescript
public readonly lang: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#lang PageRule#lang}.

---

### PageRuleActionsCacheTtlByStatus <a name="PageRuleActionsCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsCacheTtlByStatus: pageRule.PageRuleActionsCacheTtlByStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes">codes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#codes PageRule#codes}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ttl PageRule#ttl}. |

---

##### `codes`<sup>Required</sup> <a name="codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes"></a>

```typescript
public readonly codes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#codes PageRule#codes}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#ttl PageRule#ttl}.

---

### PageRuleActionsForwardingUrl <a name="PageRuleActionsForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsForwardingUrl: pageRule.PageRuleActionsForwardingUrl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode">statusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#status_code PageRule#status_code}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#url PageRule#url}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#status_code PageRule#status_code}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#url PageRule#url}.

---

### PageRuleActionsMinify <a name="PageRuleActionsMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleActionsMinify: pageRule.PageRuleActionsMinify = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css">css</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#css PageRule#css}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html">html</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#html PageRule#html}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js">js</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#js PageRule#js}. |

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#css PageRule#css}.

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#html PageRule#html}.

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js"></a>

```typescript
public readonly js: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#js PageRule#js}.

---

### PageRuleConfig <a name="PageRuleConfig" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

const pageRuleConfig: pageRule.PageRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#target PageRule#target}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#id PageRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority">priority</a></code> | <code>number</code> | Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status">status</a></code> | <code>string</code> | Defaults to `active`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions"></a>

```typescript
public readonly actions: PageRuleActions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#actions PageRule#actions}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#target PageRule#target}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#zone_id PageRule#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#id PageRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#priority PageRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Defaults to `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.8.0/docs/resources/page_rule#status PageRule#status}

---

## Classes <a name="Classes" id="Classes"></a>

### PageRuleActionsCacheKeyFieldsCookieOutputReference <a name="PageRuleActionsCacheKeyFieldsCookieOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence"></a>

```typescript
public resetCheckPresence(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput"></a>

```typescript
public readonly checkPresenceInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFieldsCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---


### PageRuleActionsCacheKeyFieldsHeaderOutputReference <a name="PageRuleActionsCacheKeyFieldsHeaderOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence">resetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckPresence` <a name="resetCheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence"></a>

```typescript
public resetCheckPresence(): void
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput">checkPresenceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresenceInput`<sup>Optional</sup> <a name="checkPresenceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput"></a>

```typescript
public readonly checkPresenceInput: string[];
```

- *Type:* string[]

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFieldsHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---


### PageRuleActionsCacheKeyFieldsHostOutputReference <a name="PageRuleActionsCacheKeyFieldsHostOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved">resetResolved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResolved` <a name="resetResolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved"></a>

```typescript
public resetResolved(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput">resolvedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved">resolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolvedInput`<sup>Optional</sup> <a name="resolvedInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput"></a>

```typescript
public readonly resolvedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved"></a>

```typescript
public readonly resolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFieldsHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---


### PageRuleActionsCacheKeyFieldsOutputReference <a name="PageRuleActionsCacheKeyFieldsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie">putCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie">resetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookie` <a name="putCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie"></a>

```typescript
public putCookie(value: PageRuleActionsCacheKeyFieldsCookie): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader"></a>

```typescript
public putHeader(value: PageRuleActionsCacheKeyFieldsHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost"></a>

```typescript
public putHost(value: PageRuleActionsCacheKeyFieldsHost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: PageRuleActionsCacheKeyFieldsQueryString): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser"></a>

```typescript
public putUser(value: PageRuleActionsCacheKeyFieldsUser): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---

##### `resetCookie` <a name="resetCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie"></a>

```typescript
public resetCookie(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput">cookieInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput">hostInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput">queryStringInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput">userInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie"></a>

```typescript
public readonly cookie: PageRuleActionsCacheKeyFieldsCookieOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header"></a>

```typescript
public readonly header: PageRuleActionsCacheKeyFieldsHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host"></a>

```typescript
public readonly host: PageRuleActionsCacheKeyFieldsHostOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: PageRuleActionsCacheKeyFieldsQueryStringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user"></a>

```typescript
public readonly user: PageRuleActionsCacheKeyFieldsUserOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a>

---

##### `cookieInput`<sup>Optional</sup> <a name="cookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput"></a>

```typescript
public readonly cookieInput: PageRuleActionsCacheKeyFieldsCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: PageRuleActionsCacheKeyFieldsHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: PageRuleActionsCacheKeyFieldsHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: PageRuleActionsCacheKeyFieldsQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: PageRuleActionsCacheKeyFieldsUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFields;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---


### PageRuleActionsCacheKeyFieldsQueryStringOutputReference <a name="PageRuleActionsCacheKeyFieldsQueryStringOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore">resetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetIgnore` <a name="resetIgnore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore"></a>

```typescript
public resetIgnore(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput">ignoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `ignoreInput`<sup>Optional</sup> <a name="ignoreInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput"></a>

```typescript
public readonly ignoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFieldsQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---


### PageRuleActionsCacheKeyFieldsUserOutputReference <a name="PageRuleActionsCacheKeyFieldsUserOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo"></a>

```typescript
public resetGeo(): void
```

##### `resetLang` <a name="resetLang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang"></a>

```typescript
public resetLang(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput">geoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput">langInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType">deviceType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo">geo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang">lang</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput"></a>

```typescript
public readonly geoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput"></a>

```typescript
public readonly langInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo"></a>

```typescript
public readonly geo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang"></a>

```typescript
public readonly lang: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsCacheKeyFieldsUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---


### PageRuleActionsCacheTtlByStatusList <a name="PageRuleActionsCacheTtlByStatusList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheTtlByStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get"></a>

```typescript
public get(index: number): PageRuleActionsCacheTtlByStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PageRuleActionsCacheTtlByStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]

---


### PageRuleActionsCacheTtlByStatusOutputReference <a name="PageRuleActionsCacheTtlByStatusOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsCacheTtlByStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput">codesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes">codes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codesInput`<sup>Optional</sup> <a name="codesInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput"></a>

```typescript
public readonly codesInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `codes`<sup>Required</sup> <a name="codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes"></a>

```typescript
public readonly codes: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PageRuleActionsCacheTtlByStatus;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>

---


### PageRuleActionsForwardingUrlOutputReference <a name="PageRuleActionsForwardingUrlOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsForwardingUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActionsForwardingUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---


### PageRuleActionsMinifyList <a name="PageRuleActionsMinifyList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsMinifyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get"></a>

```typescript
public get(index: number): PageRuleActionsMinifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PageRuleActionsMinify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]

---


### PageRuleActionsMinifyOutputReference <a name="PageRuleActionsMinifyOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsMinifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput">cssInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput">htmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput">jsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css">css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html">html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js">js</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput"></a>

```typescript
public readonly cssInput: string;
```

- *Type:* string

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput"></a>

```typescript
public readonly htmlInput: string;
```

- *Type:* string

---

##### `jsInput`<sup>Optional</sup> <a name="jsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput"></a>

```typescript
public readonly jsInput: string;
```

- *Type:* string

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js"></a>

```typescript
public readonly js: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PageRuleActionsMinify;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>

---


### PageRuleActionsOutputReference <a name="PageRuleActionsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer"></a>

```typescript
import { pageRule } from '@cdktf/provider-cloudflare'

new pageRule.PageRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields">putCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus">putCacheTtlByStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl">putForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify">putMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps">resetAlwaysUseHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites">resetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl">resetBrowserCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck">resetBrowserCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie">resetBypassCacheOnCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType">resetCacheByDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor">resetCacheDeceptionArmor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields">resetCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel">resetCacheLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie">resetCacheOnCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus">resetCacheTtlByStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps">resetDisableApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance">resetDisablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun">resetDisableRailgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity">resetDisableSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz">resetDisableZaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl">resetEdgeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation">resetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl">resetExplicitCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl">resetForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride">resetHostHeaderOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation">resetIpGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify">resetMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage">resetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption">resetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru">resetOriginErrorPagePassThru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish">resetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride">resetResolveOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag">resetRespectStrongEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering">resetResponseBuffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader">resetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude">resetServerSideExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache">resetSortQueryStringForCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader">resetTrueClientIpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf">resetWaf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheKeyFields` <a name="putCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields"></a>

```typescript
public putCacheKeyFields(value: PageRuleActionsCacheKeyFields): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---

##### `putCacheTtlByStatus` <a name="putCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus"></a>

```typescript
public putCacheTtlByStatus(value: IResolvable | PageRuleActionsCacheTtlByStatus[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]

---

##### `putForwardingUrl` <a name="putForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl"></a>

```typescript
public putForwardingUrl(value: PageRuleActionsForwardingUrl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---

##### `putMinify` <a name="putMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify"></a>

```typescript
public putMinify(value: IResolvable | PageRuleActionsMinify[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]

---

##### `resetAlwaysUseHttps` <a name="resetAlwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps"></a>

```typescript
public resetAlwaysUseHttps(): void
```

##### `resetAutomaticHttpsRewrites` <a name="resetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites"></a>

```typescript
public resetAutomaticHttpsRewrites(): void
```

##### `resetBrowserCacheTtl` <a name="resetBrowserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl"></a>

```typescript
public resetBrowserCacheTtl(): void
```

##### `resetBrowserCheck` <a name="resetBrowserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck"></a>

```typescript
public resetBrowserCheck(): void
```

##### `resetBypassCacheOnCookie` <a name="resetBypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie"></a>

```typescript
public resetBypassCacheOnCookie(): void
```

##### `resetCacheByDeviceType` <a name="resetCacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType"></a>

```typescript
public resetCacheByDeviceType(): void
```

##### `resetCacheDeceptionArmor` <a name="resetCacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor"></a>

```typescript
public resetCacheDeceptionArmor(): void
```

##### `resetCacheKeyFields` <a name="resetCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields"></a>

```typescript
public resetCacheKeyFields(): void
```

##### `resetCacheLevel` <a name="resetCacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel"></a>

```typescript
public resetCacheLevel(): void
```

##### `resetCacheOnCookie` <a name="resetCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie"></a>

```typescript
public resetCacheOnCookie(): void
```

##### `resetCacheTtlByStatus` <a name="resetCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus"></a>

```typescript
public resetCacheTtlByStatus(): void
```

##### `resetDisableApps` <a name="resetDisableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps"></a>

```typescript
public resetDisableApps(): void
```

##### `resetDisablePerformance` <a name="resetDisablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance"></a>

```typescript
public resetDisablePerformance(): void
```

##### `resetDisableRailgun` <a name="resetDisableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun"></a>

```typescript
public resetDisableRailgun(): void
```

##### `resetDisableSecurity` <a name="resetDisableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity"></a>

```typescript
public resetDisableSecurity(): void
```

##### `resetDisableZaraz` <a name="resetDisableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz"></a>

```typescript
public resetDisableZaraz(): void
```

##### `resetEdgeCacheTtl` <a name="resetEdgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl"></a>

```typescript
public resetEdgeCacheTtl(): void
```

##### `resetEmailObfuscation` <a name="resetEmailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation"></a>

```typescript
public resetEmailObfuscation(): void
```

##### `resetExplicitCacheControl` <a name="resetExplicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl"></a>

```typescript
public resetExplicitCacheControl(): void
```

##### `resetForwardingUrl` <a name="resetForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl"></a>

```typescript
public resetForwardingUrl(): void
```

##### `resetHostHeaderOverride` <a name="resetHostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride"></a>

```typescript
public resetHostHeaderOverride(): void
```

##### `resetIpGeolocation` <a name="resetIpGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation"></a>

```typescript
public resetIpGeolocation(): void
```

##### `resetMinify` <a name="resetMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify"></a>

```typescript
public resetMinify(): void
```

##### `resetMirage` <a name="resetMirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage"></a>

```typescript
public resetMirage(): void
```

##### `resetOpportunisticEncryption` <a name="resetOpportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption"></a>

```typescript
public resetOpportunisticEncryption(): void
```

##### `resetOriginErrorPagePassThru` <a name="resetOriginErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru"></a>

```typescript
public resetOriginErrorPagePassThru(): void
```

##### `resetPolish` <a name="resetPolish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish"></a>

```typescript
public resetPolish(): void
```

##### `resetResolveOverride` <a name="resetResolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride"></a>

```typescript
public resetResolveOverride(): void
```

##### `resetRespectStrongEtag` <a name="resetRespectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag"></a>

```typescript
public resetRespectStrongEtag(): void
```

##### `resetResponseBuffering` <a name="resetResponseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering"></a>

```typescript
public resetResponseBuffering(): void
```

##### `resetRocketLoader` <a name="resetRocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader"></a>

```typescript
public resetRocketLoader(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetServerSideExclude` <a name="resetServerSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude"></a>

```typescript
public resetServerSideExclude(): void
```

##### `resetSortQueryStringForCache` <a name="resetSortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache"></a>

```typescript
public resetSortQueryStringForCache(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetTrueClientIpHeader` <a name="resetTrueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader"></a>

```typescript
public resetTrueClientIpHeader(): void
```

##### `resetWaf` <a name="resetWaf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf"></a>

```typescript
public resetWaf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields">cacheKeyFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus">cacheTtlByStatus</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl">forwardingUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify">minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput">alwaysUseHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput">automaticHttpsRewritesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput">browserCacheTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput">browserCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput">bypassCacheOnCookieInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput">cacheByDeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput">cacheDeceptionArmorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput">cacheKeyFieldsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput">cacheLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput">cacheOnCookieInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput">cacheTtlByStatusInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput">disableAppsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput">disablePerformanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput">disableRailgunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput">disableSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput">disableZarazInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput">edgeCacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput">emailObfuscationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput">explicitCacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput">forwardingUrlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput">hostHeaderOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput">ipGeolocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput">minifyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput">mirageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput">opportunisticEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput">originErrorPagePassThruInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput">polishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput">resolveOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput">respectStrongEtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput">responseBufferingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput">rocketLoaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput">serverSideExcludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput">sortQueryStringForCacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput">sslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput">trueClientIpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput">wafInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps">alwaysUseHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl">browserCacheTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck">browserCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie">bypassCacheOnCookie</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel">cacheLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie">cacheOnCookie</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps">disableApps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance">disablePerformance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun">disableRailgun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity">disableSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz">disableZaraz</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl">edgeCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl">explicitCacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride">hostHeaderOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation">ipGeolocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage">mirage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru">originErrorPagePassThru</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish">polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride">resolveOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag">respectStrongEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering">responseBuffering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude">serverSideExclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache">sortQueryStringForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl">ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader">trueClientIpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf">waf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheKeyFields`<sup>Required</sup> <a name="cacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields"></a>

```typescript
public readonly cacheKeyFields: PageRuleActionsCacheKeyFieldsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a>

---

##### `cacheTtlByStatus`<sup>Required</sup> <a name="cacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus"></a>

```typescript
public readonly cacheTtlByStatus: PageRuleActionsCacheTtlByStatusList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a>

---

##### `forwardingUrl`<sup>Required</sup> <a name="forwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl"></a>

```typescript
public readonly forwardingUrl: PageRuleActionsForwardingUrlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a>

---

##### `minify`<sup>Required</sup> <a name="minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify"></a>

```typescript
public readonly minify: PageRuleActionsMinifyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a>

---

##### `alwaysUseHttpsInput`<sup>Optional</sup> <a name="alwaysUseHttpsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput"></a>

```typescript
public readonly alwaysUseHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticHttpsRewritesInput`<sup>Optional</sup> <a name="automaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput"></a>

```typescript
public readonly automaticHttpsRewritesInput: string;
```

- *Type:* string

---

##### `browserCacheTtlInput`<sup>Optional</sup> <a name="browserCacheTtlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput"></a>

```typescript
public readonly browserCacheTtlInput: string;
```

- *Type:* string

---

##### `browserCheckInput`<sup>Optional</sup> <a name="browserCheckInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput"></a>

```typescript
public readonly browserCheckInput: string;
```

- *Type:* string

---

##### `bypassCacheOnCookieInput`<sup>Optional</sup> <a name="bypassCacheOnCookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput"></a>

```typescript
public readonly bypassCacheOnCookieInput: string;
```

- *Type:* string

---

##### `cacheByDeviceTypeInput`<sup>Optional</sup> <a name="cacheByDeviceTypeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput"></a>

```typescript
public readonly cacheByDeviceTypeInput: string;
```

- *Type:* string

---

##### `cacheDeceptionArmorInput`<sup>Optional</sup> <a name="cacheDeceptionArmorInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput"></a>

```typescript
public readonly cacheDeceptionArmorInput: string;
```

- *Type:* string

---

##### `cacheKeyFieldsInput`<sup>Optional</sup> <a name="cacheKeyFieldsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput"></a>

```typescript
public readonly cacheKeyFieldsInput: PageRuleActionsCacheKeyFields;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---

##### `cacheLevelInput`<sup>Optional</sup> <a name="cacheLevelInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput"></a>

```typescript
public readonly cacheLevelInput: string;
```

- *Type:* string

---

##### `cacheOnCookieInput`<sup>Optional</sup> <a name="cacheOnCookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput"></a>

```typescript
public readonly cacheOnCookieInput: string;
```

- *Type:* string

---

##### `cacheTtlByStatusInput`<sup>Optional</sup> <a name="cacheTtlByStatusInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput"></a>

```typescript
public readonly cacheTtlByStatusInput: IResolvable | PageRuleActionsCacheTtlByStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus">PageRuleActionsCacheTtlByStatus</a>[]

---

##### `disableAppsInput`<sup>Optional</sup> <a name="disableAppsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput"></a>

```typescript
public readonly disableAppsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disablePerformanceInput`<sup>Optional</sup> <a name="disablePerformanceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput"></a>

```typescript
public readonly disablePerformanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRailgunInput`<sup>Optional</sup> <a name="disableRailgunInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput"></a>

```typescript
public readonly disableRailgunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableSecurityInput`<sup>Optional</sup> <a name="disableSecurityInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput"></a>

```typescript
public readonly disableSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableZarazInput`<sup>Optional</sup> <a name="disableZarazInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput"></a>

```typescript
public readonly disableZarazInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeCacheTtlInput`<sup>Optional</sup> <a name="edgeCacheTtlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput"></a>

```typescript
public readonly edgeCacheTtlInput: number;
```

- *Type:* number

---

##### `emailObfuscationInput`<sup>Optional</sup> <a name="emailObfuscationInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput"></a>

```typescript
public readonly emailObfuscationInput: string;
```

- *Type:* string

---

##### `explicitCacheControlInput`<sup>Optional</sup> <a name="explicitCacheControlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput"></a>

```typescript
public readonly explicitCacheControlInput: string;
```

- *Type:* string

---

##### `forwardingUrlInput`<sup>Optional</sup> <a name="forwardingUrlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput"></a>

```typescript
public readonly forwardingUrlInput: PageRuleActionsForwardingUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---

##### `hostHeaderOverrideInput`<sup>Optional</sup> <a name="hostHeaderOverrideInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput"></a>

```typescript
public readonly hostHeaderOverrideInput: string;
```

- *Type:* string

---

##### `ipGeolocationInput`<sup>Optional</sup> <a name="ipGeolocationInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput"></a>

```typescript
public readonly ipGeolocationInput: string;
```

- *Type:* string

---

##### `minifyInput`<sup>Optional</sup> <a name="minifyInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput"></a>

```typescript
public readonly minifyInput: IResolvable | PageRuleActionsMinify[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify">PageRuleActionsMinify</a>[]

---

##### `mirageInput`<sup>Optional</sup> <a name="mirageInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput"></a>

```typescript
public readonly mirageInput: string;
```

- *Type:* string

---

##### `opportunisticEncryptionInput`<sup>Optional</sup> <a name="opportunisticEncryptionInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput"></a>

```typescript
public readonly opportunisticEncryptionInput: string;
```

- *Type:* string

---

##### `originErrorPagePassThruInput`<sup>Optional</sup> <a name="originErrorPagePassThruInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput"></a>

```typescript
public readonly originErrorPagePassThruInput: string;
```

- *Type:* string

---

##### `polishInput`<sup>Optional</sup> <a name="polishInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput"></a>

```typescript
public readonly polishInput: string;
```

- *Type:* string

---

##### `resolveOverrideInput`<sup>Optional</sup> <a name="resolveOverrideInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput"></a>

```typescript
public readonly resolveOverrideInput: string;
```

- *Type:* string

---

##### `respectStrongEtagInput`<sup>Optional</sup> <a name="respectStrongEtagInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput"></a>

```typescript
public readonly respectStrongEtagInput: string;
```

- *Type:* string

---

##### `responseBufferingInput`<sup>Optional</sup> <a name="responseBufferingInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput"></a>

```typescript
public readonly responseBufferingInput: string;
```

- *Type:* string

---

##### `rocketLoaderInput`<sup>Optional</sup> <a name="rocketLoaderInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput"></a>

```typescript
public readonly rocketLoaderInput: string;
```

- *Type:* string

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `serverSideExcludeInput`<sup>Optional</sup> <a name="serverSideExcludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput"></a>

```typescript
public readonly serverSideExcludeInput: string;
```

- *Type:* string

---

##### `sortQueryStringForCacheInput`<sup>Optional</sup> <a name="sortQueryStringForCacheInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput"></a>

```typescript
public readonly sortQueryStringForCacheInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput"></a>

```typescript
public readonly sslInput: string;
```

- *Type:* string

---

##### `trueClientIpHeaderInput`<sup>Optional</sup> <a name="trueClientIpHeaderInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput"></a>

```typescript
public readonly trueClientIpHeaderInput: string;
```

- *Type:* string

---

##### `wafInput`<sup>Optional</sup> <a name="wafInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput"></a>

```typescript
public readonly wafInput: string;
```

- *Type:* string

---

##### `alwaysUseHttps`<sup>Required</sup> <a name="alwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps"></a>

```typescript
public readonly alwaysUseHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: string;
```

- *Type:* string

---

##### `browserCacheTtl`<sup>Required</sup> <a name="browserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl"></a>

```typescript
public readonly browserCacheTtl: string;
```

- *Type:* string

---

##### `browserCheck`<sup>Required</sup> <a name="browserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck"></a>

```typescript
public readonly browserCheck: string;
```

- *Type:* string

---

##### `bypassCacheOnCookie`<sup>Required</sup> <a name="bypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie"></a>

```typescript
public readonly bypassCacheOnCookie: string;
```

- *Type:* string

---

##### `cacheByDeviceType`<sup>Required</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType"></a>

```typescript
public readonly cacheByDeviceType: string;
```

- *Type:* string

---

##### `cacheDeceptionArmor`<sup>Required</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor"></a>

```typescript
public readonly cacheDeceptionArmor: string;
```

- *Type:* string

---

##### `cacheLevel`<sup>Required</sup> <a name="cacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel"></a>

```typescript
public readonly cacheLevel: string;
```

- *Type:* string

---

##### `cacheOnCookie`<sup>Required</sup> <a name="cacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie"></a>

```typescript
public readonly cacheOnCookie: string;
```

- *Type:* string

---

##### `disableApps`<sup>Required</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps"></a>

```typescript
public readonly disableApps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disablePerformance`<sup>Required</sup> <a name="disablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance"></a>

```typescript
public readonly disablePerformance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableRailgun`<sup>Required</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun"></a>

```typescript
public readonly disableRailgun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableSecurity`<sup>Required</sup> <a name="disableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity"></a>

```typescript
public readonly disableSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableZaraz`<sup>Required</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz"></a>

```typescript
public readonly disableZaraz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeCacheTtl`<sup>Required</sup> <a name="edgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl"></a>

```typescript
public readonly edgeCacheTtl: number;
```

- *Type:* number

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: string;
```

- *Type:* string

---

##### `explicitCacheControl`<sup>Required</sup> <a name="explicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl"></a>

```typescript
public readonly explicitCacheControl: string;
```

- *Type:* string

---

##### `hostHeaderOverride`<sup>Required</sup> <a name="hostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride"></a>

```typescript
public readonly hostHeaderOverride: string;
```

- *Type:* string

---

##### `ipGeolocation`<sup>Required</sup> <a name="ipGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation"></a>

```typescript
public readonly ipGeolocation: string;
```

- *Type:* string

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage"></a>

```typescript
public readonly mirage: string;
```

- *Type:* string

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: string;
```

- *Type:* string

---

##### `originErrorPagePassThru`<sup>Required</sup> <a name="originErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru"></a>

```typescript
public readonly originErrorPagePassThru: string;
```

- *Type:* string

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

---

##### `resolveOverride`<sup>Required</sup> <a name="resolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride"></a>

```typescript
public readonly resolveOverride: string;
```

- *Type:* string

---

##### `respectStrongEtag`<sup>Required</sup> <a name="respectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag"></a>

```typescript
public readonly respectStrongEtag: string;
```

- *Type:* string

---

##### `responseBuffering`<sup>Required</sup> <a name="responseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering"></a>

```typescript
public readonly responseBuffering: string;
```

- *Type:* string

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `serverSideExclude`<sup>Required</sup> <a name="serverSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude"></a>

```typescript
public readonly serverSideExclude: string;
```

- *Type:* string

---

##### `sortQueryStringForCache`<sup>Required</sup> <a name="sortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache"></a>

```typescript
public readonly sortQueryStringForCache: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

---

##### `trueClientIpHeader`<sup>Required</sup> <a name="trueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader"></a>

```typescript
public readonly trueClientIpHeader: string;
```

- *Type:* string

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PageRuleActions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---



